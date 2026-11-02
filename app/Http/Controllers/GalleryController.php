<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class GalleryController extends Controller
{
    public const CATEGORIES = ['Events', 'Projects', 'Personal'];

    /** Rules para sa create at update. Sa update, hindi isinasama ang sariling record sa unique check. */
    private function rules(?Gallery $gallery = null): array
    {
        return [
            'title'      => [
                'required', 'string', 'max:100',
                Rule::unique('galleries', 'title')->ignore($gallery?->id),
            ],
            'caption'    => ['nullable', 'string', 'max:500'],
            'category'   => ['required', Rule::in(self::CATEGORIES)],
            'date_taken' => ['required', 'date', 'before_or_equal:today'],
            // required lang sa create; sa update optional (keep old image)
            'image'      => [
                $gallery ? 'nullable' : 'required',
                'image', 'mimes:jpg,jpeg,png,webp', 'max:2048',
            ],
        ];
    }

    /** Custom error messages */
    private function messages(): array
    {
        return [
            'title.required'             => 'Kailangan ng title.',
            'title.unique'               => 'May post na may ganyang title. Pumili ng ibang title.',
            'date_taken.before_or_equal' => 'Hindi puwedeng petsa sa hinaharap.',
            'image.max'                  => 'Masyadong malaki ang image. Hanggang 2MB lang.',
            'image.mimes'                => 'JPG, PNG, o WEBP lang ang tinatanggap.',
            'category.in'                => 'Pumili ng valid na category.',
        ];
    }

    // GET /gallery
    public function index()
    {
        return Inertia::render('Gallery/Index', [
            'galleries' => Gallery::latest('id')->get(),
        ]);
    }

    // GET /gallery/create
    public function create()
    {
        return Inertia::render('Gallery/Create', [
            'categories' => self::CATEGORIES,
        ]);
    }

    // POST /gallery
    public function store(Request $request)
    {
        $data = $request->validate($this->rules(), $this->messages());

        // Random na pangalan ang file kaya walang ma-o-overwrite
        $data['image_path'] = $request->file('image')->store('gallery', 'public');
        unset($data['image']);

        Gallery::create($data);

        return redirect()->route('gallery.index')->with('success', 'Post added successfully!');
    }

    // GET /gallery/{gallery}/edit
    public function edit(Gallery $gallery)
    {
        return Inertia::render('Gallery/Edit', [
            'gallery'    => $gallery,
            'categories' => self::CATEGORIES,
        ]);
    }

    // PUT/PATCH /gallery/{gallery}
    public function update(Request $request, Gallery $gallery)
    {
        $data = $request->validate($this->rules($gallery), $this->messages());

        if ($request->hasFile('image')) {
            Storage::disk('public')->delete($gallery->image_path); // burahin ang luma
            $data['image_path'] = $request->file('image')->store('gallery', 'public');
        }
        unset($data['image']);

        $gallery->update($data);

        return redirect()->route('gallery.index')->with('success', 'Post updated successfully!');
    }

    // DELETE /gallery/{gallery}
    public function destroy(Gallery $gallery)
    {
        Storage::disk('public')->delete($gallery->image_path);
        $gallery->delete();

        return redirect()->route('gallery.index')->with('success', 'Post deleted successfully!');
    }
}