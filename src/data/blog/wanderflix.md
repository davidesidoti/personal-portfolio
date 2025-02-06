---
title: "Wanderflix"
description: "A Laravel Filament web application to track movies, TV shows, and plan trips. Built for personal use."
pubDate: 2024-10-12
category: "php"
draft: false
---

<div style="display: flex;">
<a href="https://github.com/davidesidoti/WanderFlix"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>

<img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"  style="padding-left: 15px"/>

<img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"  style="padding-left: 15px"/>
</div>

<br />

WanderFlix is a personal web application built with Laravel Filament for tracking movies and TV shows, as well as organizing trip plans. This app is designed for personal use by Davide and Sara to streamline their entertainment and travel planning.

<br />

## Features

- **Movie and TV Show Tracking**: Keep track of what has been watched and what's on the watchlist.
- **Trip Planning**: Plan future trips, complete with itineraries, destinations, and notes.

<br />

## Technology Stack

- **Laravel**: A robust PHP framework for modern web applications.
- **Filament**: An admin panel framework for Laravel.
- **MySQL**: Database management.
- **Tailwind CSS**: For styling and responsive design.

<br />

## Setup

To run this project locally, follow these steps:
1. Clone the repository:
    ```bash
    git clone https://github.com/tuonomeutente/WanderFlix.git
    ```

<br />

2. Navigate to the project directory:
    ```bash
    cd WanderFlix
    ```

<br />

3. Install dependencies:
    ```bash
    composer install
    npm install
    ```

<br />

4. Copy the `.env.example` file to `.env` and configure your database:
    ```bash
    cp .env.example .env
    ```

<br />

5. Generate the application key:
    ```bash
    php artisan key:generate
    ```

<br />

6. Run migrations:
    ```bash
    php artisan migrate
    ```

<br />

7. Start the development server:
    ```bash
    php artisan serve
    ```

<br />

## Future Improvements

- Add social media integration to share trip plans.
- Create reccomendation system for movies and TV shows based on watch history.

<br />

## License

This project is open-source and available under the GNU General Public License v3.0.

<br />
<br />
