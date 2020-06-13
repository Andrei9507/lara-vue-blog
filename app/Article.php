<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Comment;

class Article extends Model
{
    protected $articles;
    protected $fillable = ['title', 'description', 'user_id'];

    public function getAll()
    {
        // return $this->with('product')->get();
        return $this->with('comments', 'user')->get();
    }

    public function saveItem($params)
    {
        $new = $this->create($params);
        $new = $this->getAll()->last();
        
        return $new;

    }

    public function updateItem($request, $article)
    {
        $article = $this->with('user')->find($article->id);

        $article->update($request->all());
        return $article;
    }

    public function getItem($id)
    {
        return $this->with('comments.user')->find($id);
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    // public function commentOwner()
    // {
    //     return $this->hasManyThrough('App\User','App\Comment');
    // }
}
