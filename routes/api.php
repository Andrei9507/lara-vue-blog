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

Route::group([ 'prefix' => 'auth' ], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::group([ 'middleware' => 'jwt.auth' ], function ($router) {

    Route::get('articles', 'ArticleController@index');
    Route::post('articles', 'ArticleController@store');
    Route::put('articles/{article}', 'ArticleController@update');
    Route::get('users', 'UserController@index');
    Route::get('articles/{id}', 'ArticleController@get');
    Route::post('comments', 'CommentController@store');
    
});

// Route::get('quantities', ['middleware' => 'cors' , 'quantities'=> 'QuantityController@index']);
// quantities routes
Route::get('quantities', 'QuantityController@index');
Route::post('quantities', 'QuantityController@store');
// route for history calories
Route::get('quantities-history/{day?}/{month?}/{year?}','QuantityController@history');
// Route::get('events/{year?}/{month?}/{day?}', 'EventController@show')
// products routes
Route::delete('articles/{article}', 'ArticleController@delete');
