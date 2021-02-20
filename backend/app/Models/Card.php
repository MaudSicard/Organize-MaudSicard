<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
     /**
     * Get the category that owns the cards
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
