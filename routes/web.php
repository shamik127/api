<?php

Route::get('/', 'AppController@getApp');

Route::get('/login', 'AppController@getLogin' )
      ->name('login')
      ->middleware('guest');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/login/{social}', 'AuthenticationController@getSocialLogin');

Route::get('/login/{social}/callback', 'AuthenticationController@getSocialCallback');
