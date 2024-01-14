<?php

namespace App\Http\Controllers;

use App\Models\Cinema;
use Illuminate\Http\Request;

class CinemaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cinemas = Cinema::all();
        return json_encode($cinemas);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'string',
            'numberOfRows' => 'number',
            'numberOfSeat' => 'number',
            'isActive' => 'boolean',
        ]);
        return Cinema::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Cinema $cinema)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cinema $cinema)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cinema $id)
    {
        $cinema = Cinema::find($id)->first();
        $cinema->update($request->all());
        $cinema->save();
        return $cinema;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cinema $id)
    {
        $cinema = Cinema::find($id);
        $cinema[0]->delete();
        $test = Cinema::find($id);
        return response($test ?? 'OK', 200);
    }
}


