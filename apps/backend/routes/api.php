<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function () {
    $users = [
        [
            "naam" => "John Doe",
            "email" => "johndoe@example.com",
            "age" => 32
        ],  
        [
            "naam" => "Jane Doe",
            "email" => "janedoe@example.com",
            "age" => 22
        ],
        [
            "naam" => "Alice Smith",
            "email" => "alice@example.com",
            "age" => 23
        ]
    ];

    return response()->json(["users" => $users]);
});
