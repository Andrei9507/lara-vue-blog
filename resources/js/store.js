import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { getLocalUser } from './helpers/auth';
// import router from './router';

Vue.use(Vuex)

const user = getLocalUser();

export default new Vuex.Store({
  state: {
      currentUser: {user},
      isLoggedIn: !!user,  // !! bcs cast in boolean
      loading: false,
      auth_error:null,


      articles: [],
      article: null,

  },
  mutations: {

    login(state) {
        state.loading = true;
        state.auth_error = null;
    },

    loginSuccess(state, payload){
        state.auth_error = null;
        state.isLoggedIn = true;
        state.loading = false;
        state.currentUser = Object.assign({}, payload.user, {token: payload.access_token}); // set to one object user and token
        // console.log(state.currentUser);
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    },

    loginFailed(state, payload) {
      state.loading = false;
      state.auth_error = payload.error;
    },

    logout(state) {
      localStorage.removeItem("user");
      state.isLoggedIn = false;
      state.currentUser = null;
    },
    
    updateArticles(state, payload) {
      state.articles = payload;
    },

    storeArticle(state, article) {
      state.article = article;
    },
  },
  actions: {

    login({commit}){
      commit('login');
    },

    logout({commit}) {
      commit('logout');
    },

    getArticles({commit, state}) {
      // console.log(state.currentUser.user.token);
      axios.get('/api/articles', {
        headers: {
          "Authorization": `Bearer ${state.currentUser.user.token}`
        }
      })
            .then(function (response) {
              // handle success
              commit('updateArticles', response.data.articles);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
    },

    storeArticle ({commit, state}, article) {
    
        axios.post('http://localhost:8000/api/articles', article, {
          headers: {
            "Authorization": `Bearer ${state.currentUser.user.token}`
          } 
        })
          .then(res => console.log(res))
          .catch(error => console.log(error))
    },
  },
  getters:{
      articles(state) {
        return state.articles;
      },

      isLoading(state) {
        return state.loading;
      },

      currentUser(state) {
        return state.currentUser;
      },

      isLoggedIn(state) {
        return state.isLoggedIn;
      },

      authError(state) {
        return state.auth_error;
      }

  }

})