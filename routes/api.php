<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/sessions', [App\Http\Controllers\SessionController::class, 'index']);
Route::get('/cinemas', [App\Http\Controllers\CinemaController::class, 'index']);

Route::post('/sessions/store', [App\Http\Controllers\SessionController::class, 'store']);
Route::post('/cinemas/store', [App\Http\Controllers\CinemaController::class, 'store']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
