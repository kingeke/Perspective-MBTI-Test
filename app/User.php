<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = [
        'email'
    ];

    public function ranks()
    {
        return $this->hasMany('App\Rank');
    }

    public function storeRanks($question, $rank)
    {
        return $this->ranks()->updateOrCreate(
            ['question' => $question],
            ['rank' => $rank]
        );
    }
}
