<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    // GET /  (public portfolio, kasama ang gallery records)
    public function index()
    {
        return Inertia::render('Portfolio', [
            'galleries' => Gallery::latest('date_taken')->get(),
        ]);
    }
}