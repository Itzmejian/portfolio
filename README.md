# Jian Paul Portfolio — Laravel + Inertia.js + React

Midterm Laboratory Activity for **IT ELEC01 – Advanced Web Development**: Portfolio CRUD with Validation.

My personal portfolio, converted from a static website into a **Laravel 12 + Inertia.js + React** app.
The **Gallery (Posts)** section is dynamic. Its records are stored in a MySQL database and managed through
a full CRUD (Create, Read, Update, Delete) with server-side validation.

## Features

- Public portfolio page (`/`) with Home, Skills, About, Projects/Gallery, and Contact sections
- Gallery CRUD at `/gallery`: list, add, edit, and delete posts with image upload
- Server-side validation with custom error messages, shown beside each field
- Typed values are kept when validation fails
- Success message after create, update, and delete
- Confirmation modal before deleting a record
- **Bonus:** the management pages are protected by login (`auth` middleware)
- Automated validation tests (`tests/Feature/GalleryValidationTest.php`)

## Tech Stack

| Layer    | Tools                                   |
| -------- | --------------------------------------- |
| Backend  | Laravel 12, PHP 8.2+                    |
| Frontend | React 19, Inertia.js 2, Tailwind CSS 4  |
| Database | MySQL (XAMPP)                           |
| Build    | Vite                                    |

## Requirements

- PHP 8.2 or newer (XAMPP with PHP 8.2+)
- Composer
- Node.js 18+ and npm
- MySQL (XAMPP)

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url> portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Create the environment file and app key**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
   On Windows Command Prompt, use `copy .env.example .env` instead of `cp`.

4. **Create the database**
   Start **Apache** and **MySQL** in XAMPP, open http://localhost/phpmyadmin, and create a database named
   `portfolio_laravel`. Then make sure these lines are in `.env`:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=portfolio_laravel
   DB_USERNAME=root
   DB_PASSWORD=
   ```

5. **Run the migrations and link the storage folder** (for uploaded images)
   ```bash
   php artisan migrate
   php artisan storage:link
   ```

6. **Start the app** (two terminals)
   ```bash
   php artisan serve --port=8001
   ```
   ```bash
   npm run dev
   ```
   On Windows you can also double-click `run-portfolio.bat`, which does steps 5 and 6 for you.

7. Open **http://127.0.0.1:8001**

## Using the Gallery CRUD

1. Click **Posts** in the navbar, or **Manage Posts** in the Projects/Gallery section.
2. Log in. To create the default local account, run `php artisan db:seed --class=PortfolioUserSeeder`
   (`run-portfolio.bat` does this automatically), then log in with **jian@portfolio.test** / **portfolio123**.
   You can also click **Register** on the login page to make your own account.
3. Add, edit, or delete posts. New posts appear right away in the Projects/Gallery section of the public page.

## Running the Validation Tests

```bash
php artisan test --filter=GalleryValidation
```

These tests use a separate in-memory SQLite database, so your real data is not touched.

## Project Structure (files I created or modified)

```
app/
├── Http/Controllers/GalleryController.php     # resource controller + validation rules
├── Http/Controllers/PortfolioController.php   # public portfolio page
├── Http/Middleware/HandleInertiaRequests.php  # shares the flash success message
└── Models/Gallery.php                         # Eloquent model with $fillable
database/migrations/2026_10_23_025749_create_galleries_table.php
routes/web.php                                 # Route::resource('gallery', ...)
resources/js/
├── pages/
│   ├── Portfolio.jsx                          # public portfolio page
│   └── Gallery/Index.jsx, Create.jsx, Edit.jsx
└── components/
    ├── Navbar.jsx, Footer.jsx, SectionTitle.jsx, Icon.jsx
    ├── GalleryCard.jsx                        # card on the public page
    ├── GalleryForm.jsx                        # shared form for Create and Edit
    ├── FormField.jsx                          # label + input + error message
    ├── FlashMessage.jsx                       # success message
    └── ManageLayout.jsx                       # layout of the management pages
tests/Feature/GalleryValidationTest.php
```

## Validation Rules

| Field        | Rules                                                              |
| ------------ | ------------------------------------------------------------------ |
| `title`      | required, string, max:100, unique (ignores the current record on update) |
| `caption`    | nullable, string, max:500                                          |
| `category`   | required, in: Events, Projects, Personal                           |
| `date_taken` | required, date, before_or_equal:today                              |
| `image`      | required on create / nullable on update, image, mimes:jpg,jpeg,png,webp, max:2048 (2MB) |

## Author

**Jian Paul N. Mamongay** — BSIT, Urdaneta City University
