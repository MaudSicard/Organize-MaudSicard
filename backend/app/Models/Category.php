<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * Category contains many cards
     */
    public function card()
    {
        return $this->hasMany(Card::class, 'category_id', 'id');
    }
}
