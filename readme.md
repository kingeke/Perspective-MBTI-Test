> ### Myers-Briggs Type Indicator (MBTI) Perspective Tool.

This repo is the submission of Chinonso Eke's Shift Job Application Challenge.

---

# Getting started

## Installation

Please check the official laravel installation guide for server requirements before you start. [Official Documentation](https://laravel.com/docs/5.8/installation)

Clone the repository

    git clone https://github.com/kingeke/Perspective-MBTI-Test.git

Switch to the repo folder

    cd Perspective-MBTI-Test

Install all the dependencies using composer

    composer install

Install all the packages using npm

    npm install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

You can now access the server at http://127.0.0.1:8000

**Make sure you set the correct database connection information before running the migrations** [Environment variables](#environment-variables)

    php artisan migrate
    php artisan serve

# Code overview

## NPM Packages

-   [babel](https://babeljs.io/) - Used to convert ES6 to ES5
-   [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser
-   [react-detect-offline](https://www.npmjs.com/package/react-detect-offline) - Used to determine when the user is not connected to the internet

## Environment variables

-   `.env` - Environment variables can be set in this file

**_Note_** : You can quickly set the database information and other variables in this file and have the application fully working.
