<?php

namespace App\Http\Controllers;

use App\Models\Level;
use Illuminate\Http\Request;

class LevelController extends Controller 
{

    public function index() {
        try {
            return Level::all();
        } catch(\Exception $e) {
            return response('Nepavyko gauti lentelės'.$e, 500);
        }
    }

    public function getLevel($id) {
        $fieldArray = [];
        try {
            return Level::find($id);
            // $fileContents = file_get_contents(__DIR__ . '/../../../storage/b'.$id.'.txt');
            // // $linesArrays = explode("~", $fileContents);
            // // foreach ($linesArrays as $line){
            // //     dump($line);
            // //     $field = explode("-", $line);
            // //     dump ($field);
            // //     array_push($fieldArray, $field);
            // // }
            // // $send = json_encode($fieldArray);
            // // return $send;
            // return $fileContents;
        } catch(\Exception $e) {
            return response('Nepavyko gauti funkicjos iš vidaus', 500);
        }
    }

}