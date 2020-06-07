
require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'


import {routes} from './routes';
import Navbar from './components/Navbar.vue';
import store from './store'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.component('navbar', Navbar);

const router = new VueRouter({
        routes,
        mode: 'history'

});

router.beforeEach((to, from, next) => {
        
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const currentUser = store.state.currentUser;

        console.log(requiresAuth);
        console.log( currentUser);
        if(requiresAuth && currentUser.user == null) {
                next('/login');
        } else if(to.path == '/login' && currentUser.user )
        {
                next('/');
        } else {
                next();
        }

})


const app = new Vue({
        el: '#app',
        router,
        store
});