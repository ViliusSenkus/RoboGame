<?php

namespace App\Http\Controllers;

use App\Models\Board;
use Illuminate\Http\Request;

class BoardController extends Controller 
{

    public function index() {
        try {
            return Board::all();
        } catch(\Exception $e) {
            return response('Nepavyko gauti lentelės', 500);
        }
    }
}
