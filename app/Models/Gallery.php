<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    // Mga column na puwedeng i-mass assign (Gallery::create($data)).
    // Kapag wala ito, MassAssignmentException ang lalabas.
    protected $fillable = [
        'title',
        'caption',
        'image_path',
        'category',
        'date_taken',
    ];

    // Isasama sa JSON na pupunta sa React para may ready na image URL
    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): string
    {
        return asset('storage/' . $this->image_path);
    }
}