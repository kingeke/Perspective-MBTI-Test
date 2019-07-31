<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rank extends Model
{
    protected $fillable = [
        'rank', 'question'
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
