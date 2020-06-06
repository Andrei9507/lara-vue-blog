<?php

use Illuminate\Database\Seeder;
use App\Article;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 50; $i++) {
            Article::create([
                'title' => Str::random(10),
                'description' => Str::random(50),
            ]);
        }
    }
}

