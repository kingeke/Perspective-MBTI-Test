<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Requests\PerspectiveStoreRequest;

class PerspectiveController extends Controller
{
    public function store(PerspectiveStoreRequest $request)
    {
        //create or fetch the user by email
        $user = User::firstOrCreate($request->only('email'));

        //update or create questions in the database, so a user has only the given set of questions
        //per request and only if the user picks a different rank does it get updated.
        $data = $this->updateOrCreateQuestionsAndReturnData($request->response, $user);

        //generate the mbti by using a, b, dimension algorithm
        $mbti = $this->dominantDimension(
            [
                ['a' => $data['E'], 'b' => $data['I'], 'dimensions' => 'EI'],
                ['a' => $data['S'], 'b' => $data['N'], 'dimensions' => 'SN'],
                ['a' => $data['T'], 'b' => $data['F'], 'dimensions' => 'TF'],
                ['a' => $data['J'], 'b' => $data['P'], 'dimensions' => 'JP']
            ]
        );

        return response()->json([
            'status' => 'success',
            'mbti' => $mbti
        ], 200);
    }

    public function updateOrCreateQuestionsAndReturnData($responses, $user)
    {
        //associative array of individual dimensions
        $data = array('E' => 0, 'I' => 0, 'S' => 0, 'N' => 0, 'T' => 0, 'F' => 0, 'J' => 0, 'P' => 0);

        //loop through each response 
        foreach ($responses as $response) {

            //calls the storeRanks method on the user model, which just updateOrCreates the question
            $user->storeRanks($response['question'], $response['rank']);

            //increment the array based on the rank chosen
            if ($response['score'] == $response['dimension'][0]) {
                $data[$response['dimension'][0]]++;
            } else {
                $data[$response['dimension'][1]]++;
            }
        }

        return $data;
    }

    public function dominantDimension($data)
    {
        $mbti = '';

        foreach ($data as $dimension) {
            //compares the data based on a, b and dimension then concatenates the result to the mbti
            if ($dimension['a'] > $dimension['b'] || $dimension['a'] == $dimension['b']) {
                $mbti .= $dimension['dimensions'][0];
            } else {
                $mbti .= $dimension['dimensions'][1];
            }
        }

        return $mbti;
    }
}
