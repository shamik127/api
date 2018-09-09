<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\File;

class FileController extends Controller
{
    public function store(Request $request)
    {
        $file = $request->file('file');

        $destinationPath = app_path().'/Documents';
        $filename = time().'-'.$file->getClientOriginalName();
        $file->move( $destinationPath, $filename );
        $newFile = new File();

        $newFile->user_id = 1;
        $newFile->file_url = app_path() .'/Documents';

        $newFile->save();

        return response()->json(true);
    }
}
