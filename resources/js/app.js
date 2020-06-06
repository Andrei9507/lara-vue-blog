
require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Navbar from './components/Navbar.vue';
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.component('navbar', Navbar);

const app = new Vue({
        el: '#app',
        store,
        router: new VueRouter(routes)
});