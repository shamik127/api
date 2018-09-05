<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    public function getApp() {
        return view('welcome');
    }
    public function getLogin() 
    {
        return view('login');
    }
}
