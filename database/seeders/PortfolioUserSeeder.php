<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

// Gumagawa ng admin account para makapag-login sa /gallery (local development lang).
// Patakbuhin: php artisan db:seed --class=PortfolioUserSeeder
class PortfolioUserSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            ['email' => 'jian@portfolio.test'],
            [
                'name' => 'Jian Paul',
                'password' => Hash::make('portfolio123'),
                'email_verified_at' => now(),
            ],
        );
    }
}
