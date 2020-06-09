<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Comment;

class Article extends Model
{
    protected $articles;
    protected $fillable = ['title', 'description'];

    public function getAll()
    {
        // return $this->with('product')->get();
        return $this->with('comments')->get();
    }

    public function saveItem($params)
    {
        $new = $this->create($params);
        return $new;

    }

    public function getItem($id)
    {
        return $this->with('comments')->find($id);
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    // public function commentOwner()
    // {
    //     return $this->hasManyThrough('App\User','App\Comment');
    // }
}
