<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index($id) {
        if ($id != null) {
            $articles = Article::all();
            return $articles;
        }
        else {
            $article = Article::where('id', '=', $id)->first();
            return $article;
        }
    }
}
