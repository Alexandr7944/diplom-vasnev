<?php

namespace App\Http\Controllers;

use App\Models\Seat;
use Illuminate\Http\Request;

class SeatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($idCinema)
    {
        $data = Seat::where('cinemaId', $idCinema)->get();
        return json_encode($data);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Seat::create([
            'cinemaId' => $request['cinemaId'],
            'row' => $request['row'],
            'seat' => $request['seat'],
            'status' => $request['status'],
            'isEmploy' => $request['isEmploy']
        ]);

//        for ($i = 0; $i < count($request); $i++) {
//            Seat::create([
//                'cinemaId' => $request[$i]['cinemaId'],
//                'row' => $request[$i]['row'],
//                'seat' => $request[$i]['seat'],
//                'status' => $request[$i]['status'],
//                'isEmploy' => $request[$i]['isEmploy']
//            ]);

//            $seat = new Seat();
//            $seat->cinemaId = $request[$i]->get('cinemaId');
//            $seat->row = $request[$i]->get('row');
//            $seat->seat = $request[$i]->get('seat');
//            $seat->status = $request[$i]->get('status');
//            $seat->isEmploy = $request[$i]->get('isEmploy');
//            $seat->save();
//        }
//        return Seat::where('cinemaId', $request[0]['cinemaId'])->get();

        // почему-то работает при еденичном сохранении,
        // но не работает в цикле (предпологаю из-за асинхронности)
    }

    /**
     * Display the specified resource.
     */
    public function show(Seat $seat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Seat $seat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Seat $id)
    {
        $seat = Seat::find($id)->first();
        $seat->update($request->all());
        $seat->save();
        return $seat;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seat $id)
    {
        $seat = Seat::find($id);
        return $seat[0]->delete();
    }
}
