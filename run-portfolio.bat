@echo off
REM Pinapatakbo ang Laravel portfolio sa port 8001 (ginagamit ng ibang project ang 8000)
cd /d "%~dp0"

echo === Migrating database (portfolio_laravel) ===
php artisan migrate --force
php artisan storage:link 2>nul

echo === Gumagawa ng login account kung wala pa (jian@portfolio.test) ===
php artisan db:seed --class=PortfolioUserSeeder --force

echo === Starting Vite (npm run dev) sa hiwalay na window ===
start "Portfolio - Vite" cmd /k "cd /d "%~dp0" && npm run dev"

echo === Opening browser ===
start "" http://127.0.0.1:8001

echo === Starting Laravel server sa http://127.0.0.1:8001 ===
php artisan serve --port=8001
pause
