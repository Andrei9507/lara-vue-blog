
require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'


import {routes} from './routes';
import Navbar from './components/Navbar.vue';
import {initialize} from './helpers/authChecks';
import Vuelidate from 'vuelidate';
import store from './store'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.component('navbar', Navbar);

const router = new VueRouter({
        routes,
        mode: 'history'

});

initialize(store, router);

// Continue with view article and tutorial



const app = new Vue({
        el: '#app',
        store,
        router
});