<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    public function index($id = null) {
        if ($id == null) {
            $articles = Article::all();
            return $articles;
        }
        else {
            $article = Article::where('id', '=', $id)->get();
            return $article;
        }
    }
}
