<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('galleries', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->unique();   // pangalan ng post, hindi puwedeng doble
            $table->text('caption')->nullable();      // dating "description"
            $table->string('image_path');             // path ng file sa storage
            $table->string('category', 50);           // Events / Projects / Personal
            $table->date('date_taken');               // dating "date"
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('galleries');
    }
};