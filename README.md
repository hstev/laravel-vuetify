# laravel-vuetify

![cover](./public/gh-cover.webp)

This is a typical `laravel new` project but using vuetify as the front-end framework. You only have to start building your pages using vuetify components.

## Features
- [Laravel 12.x](https://laravel.com)
- [Vuetify 3.x](https://vuetifyjs.com)

## Installation
1. Clone the repository
```bash
git clone git@github.com:hstev/laravel-vuetify.git
```
2. Change directory to the project folder
```bash
cd laravel-vuetify
```
3. Install the dependencies
```bash
npm install
```
4. Install the Laravel dependencies
```bash
composer install
```
5. Create a `.env` file and set up your database connection
```bash
cp .env.example .env
```
6. Generate the application key
```bash
php artisan key:generate
```
7. Run the migrations
```bash
php artisan migrate
```
8. Run the development server
```bash
php artisan serve
```
9. Run the front-end development server
```bash
npm run dev
```