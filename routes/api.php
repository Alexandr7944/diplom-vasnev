<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/sessions', [App\Http\Controllers\SessionController::class, 'index']);
Route::post('/sessions/store', [App\Http\Controllers\SessionController::class, 'store']);

Route::get('/cinemas', [App\Http\Controllers\CinemaController::class, 'index']);
Route::post('/cinemas/store', [App\Http\Controllers\CinemaController::class, 'store']);
Route::patch('/cinemas/{id}', [App\Http\Controllers\CinemaController::class, 'update']);
Route::delete('/cinemas/{id}', [App\Http\Controllers\CinemaController::class, 'destroy']);

Route::get('/seats/{idCinema}', [App\Http\Controllers\SeatController::class, 'index']);
Route::post('/seats/store', [App\Http\Controllers\SeatController::class, 'store']);
Route::patch('/seats/{id}', [App\Http\Controllers\SeatController::class, 'update']);
Route::delete('/seats/{id}', [App\Http\Controllers\SeatController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
