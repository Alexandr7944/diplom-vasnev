<?php

use Illuminate\Support\Facades\Route;

Route::view('/client/{path?}', 'client');
Route::view('/hall/{path?}', 'client');
Route::view('/payment/{path?}', 'client');
Route::view('/ticket/{path?}', 'client');

Auth::routes([
    Route::view('/admin/{path?}', 'admin')
]);

Route::get('/', function () {
    return redirect('/client');
});



//Route::get('/admin', [App\Http\Controllers\AdminController::class, 'index'])->name('admin.index');
//Route::post('/cinema', [App\Http\Controllers\CinemaController::class, 'store'])->name('cinema.store');
//Route::delete('/cinema/{id}', [App\Http\Controllers\CinemaController::class, 'destroy'])->name('cinema.destroy');
