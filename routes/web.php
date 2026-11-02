<?php

use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public portfolio (kasama ang gallery records mula sa database)
Route::get('/', [PortfolioController::class, 'index'])->name('home');

// Lahat ng route dito ay para lang sa naka-login (bonus: login protection)
Route::middleware(['auth'])->group(function () {
    // CRUD ng Gallery: index, create, store, edit, update, destroy
    Route::resource('gallery', GalleryController::class)->except(['show']);

    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
