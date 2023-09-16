<?php

use App\Http\Controllers\BoardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/',[BoardController::class, 'index']);
Route::get('/level/{id}', [BoardController::class, 'getLevel']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
