<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('client.index');
});

Route::get('/hall', function () {
    return view('client.hall');
});

Route::get('/payment', function () {
    return view('client.payment');
});

Route::get('/ticket', function () {
    return view('client.ticket');
});

Auth::routes();

Route::get('/admin', [App\Http\Controllers\AdminController::class, 'index'])->name('admin.index');
Route::post('/cinema', [App\Http\Controllers\CinemaController::class, 'store'])->name('cinema.store');
Route::delete('/cinema/{id}', [App\Http\Controllers\CinemaController::class, 'destroy'])->name('cinema.destroy');
