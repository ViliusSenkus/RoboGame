<?php

use App\Http\Controllers\LevelController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/',[LevelController::class, 'index']);
Route::get('/level/{id}', [LevelController::class, 'getLevel']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
