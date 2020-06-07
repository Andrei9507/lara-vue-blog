import Exemple from './components/Exemple.vue';
import Home from './components/Home.vue';
import Articles from './components/articles/Articles.vue';
import ArticlesList from './components/articles/List.vue';
import NewArticle from './components/articles/New.vue';
import Article from './components/articles/Article.vue';
import Login from './components/auth/Login.vue';
import store from './store';


export const routes =  [
     
        {
                path: '/',
                component: Home,
                meta: {
                        requiresAuth: true
                }
                // beforeEnter(to, from, next) {
                //         // console.log(this.$store.state.currentUser.token);
                //         const item = store.state.currentUser
                //         console.log(item);
                //         console.log("checked");
                //         if(item.token){
                //                 next()
                //         }else {
                //                 next('/login');
                //         }
                // }
        },
        {
                path:'/login',
                component: Login
        },
        // {
        //         path: '/articles',
        //         component: Articles,
        //         children: [
        //                 {
        //                         path: '/',
        //                         component: ArticlesList
        //                 },
        //                 {
        //                         path: 'new',
        //                         component: NewArticle
        //                 },
        //                 {
        //                         path:':id',
        //                         component: Article
        //                 }

        //         ]
        // }


];
