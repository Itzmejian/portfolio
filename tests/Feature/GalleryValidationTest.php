<?php

use App\Models\Gallery;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

uses(RefreshDatabase::class);

/*
| Validation Test Table (Part 4) bilang automated tests.
| Patakbuhin: php artisan test --filter=GalleryValidation
*/

beforeEach(function () {
    Storage::fake('public');
    $this->actingAs(User::factory()->create());
});

// Valid na data na puwedeng i-override sa bawat test
function validGallery(array $override = []): array
{
    return array_merge([
        'title'      => 'Network Setup Day',
        'caption'    => 'Nag-setup kami ng network sa lab.',
        'category'   => 'Projects',
        'date_taken' => '2026-10-01',
        'image'      => UploadedFile::fake()->image('photo.jpg', 800, 600),
    ], $override);
}

it('TC1: empty form shows an error under every required field', function () {
    $this->from('/gallery/create')
        ->post('/gallery', [])
        ->assertRedirect('/gallery/create')
        ->assertSessionHasErrors(['title', 'category', 'date_taken', 'image']);

    expect(session('errors')->get('title')[0])->toBe('Kailangan ng title.');
    expect(Gallery::count())->toBe(0);
});

it('TC2: title longer than 100 characters is rejected', function () {
    $this->post('/gallery', validGallery(['title' => str_repeat('A', 101)]))
        ->assertSessionHasErrors(['title']);

    expect(Gallery::count())->toBe(0);
});

it('TC3: invalid date format is rejected', function () {
    $this->post('/gallery', validGallery(['date_taken' => 'hello']))
        ->assertSessionHasErrors(['date_taken']);
});

it('TC4: future date is rejected with custom message', function () {
    $this->post('/gallery', validGallery(['date_taken' => now()->addDays(5)->toDateString()]))
        ->assertSessionHasErrors(['date_taken' => 'Hindi puwedeng petsa sa hinaharap.']);
});

it('TC5: category not in the list is rejected', function () {
    $this->post('/gallery', validGallery(['category' => 'Random']))
        ->assertSessionHasErrors(['category' => 'Pumili ng valid na category.']);
});

it('TC6: duplicate title is rejected with custom message', function () {
    $this->post('/gallery', validGallery())->assertSessionHasNoErrors();

    $this->post('/gallery', validGallery(['image' => UploadedFile::fake()->image('b.jpg')]))
        ->assertSessionHasErrors(['title' => 'May post na may ganyang title. Pumili ng ibang title.']);

    expect(Gallery::count())->toBe(1);
});

it('TC7: updating a record without changing its title still saves', function () {
    $this->post('/gallery', validGallery());
    $gallery = Gallery::first();

    $this->put("/gallery/{$gallery->id}", [
        'title'      => $gallery->title, // parehong title
        'caption'    => 'Bagong caption',
        'category'   => 'Events',
        'date_taken' => '2026-09-15',
    ])->assertSessionHasNoErrors()->assertRedirect('/gallery');

    expect($gallery->fresh()->caption)->toBe('Bagong caption');
});

it('TC8: uploading a file that is not an image is rejected', function () {
    $this->post('/gallery', validGallery([
        'image' => UploadedFile::fake()->create('resume.pdf', 100, 'application/pdf'),
    ]))->assertSessionHasErrors(['image']);
});

it('TC9: image larger than 2MB is rejected with custom message', function () {
    $this->post('/gallery', validGallery([
        'image' => UploadedFile::fake()->image('big.jpg')->size(3000), // 3MB
    ]))->assertSessionHasErrors(['image' => 'Masyadong malaki ang image. Hanggang 2MB lang.']);
});

it('TC10: valid data is saved and shows a success message', function () {
    $this->post('/gallery', validGallery())
        ->assertRedirect('/gallery')
        ->assertSessionHas('success', 'Post added successfully!');

    expect(Gallery::count())->toBe(1);
    Storage::disk('public')->assertExists(Gallery::first()->image_path);
});

it('TC11: guests are redirected to login', function () {
    auth()->logout();

    $this->get('/gallery')->assertRedirect('/login');
});
