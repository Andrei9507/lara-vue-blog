import Exemple from './components/Exemple.vue';
import Home from './components/Home.vue';
import Articles from './components/articles/Articles.vue';
import ArticlesList from './components/articles/List.vue';
import NewArticle from './components/articles/New.vue';
import Article from './components/articles/Article.vue';

export default {
        mode: 'history',

        routes: [
                        {
                                path: '/',
                                component: Exemple
                        },
                        {
                                path: '/home',
                                component: Home
                        },
                        {
                                path: '/articles',
                                component: Articles,
                                children: [
                                        {
                                                path: '/',
                                                component: ArticlesList
                                        },
                                        {
                                                path: 'new',
                                                component: NewArticle
                                        },
                                        {
                                                path:':id',
                                                component: Article
                                        }

                                ]
                        }


                ]
}