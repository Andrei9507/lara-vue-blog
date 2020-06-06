<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $articles;
    protected $fillable = ['title', 'description'];

    public function getAll()
    {
        // return $this->with('product')->get();
        return $this->get();
    }

    public function saveItem($params)
    {
        $new = $this->create($params);
        // $new = $this->with('product')->latest()->first();
        return $new;

    }
}
