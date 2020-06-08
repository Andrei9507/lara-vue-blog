
require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'


import {routes} from './routes';
import Navbar from './components/Navbar.vue';
import store from './store'
import {initialize} from './helpers/authChecks';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.component('navbar', Navbar);

const router = new VueRouter({
        routes,
        mode: 'history'

});

initialize(store, router);

// Continue with view article and tutorial



const app = new Vue({
        el: '#app',
        router,
        store
});