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
      authors: [],

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
      // console.log(state.articles)
    },

    addStoredArticleToArray(state, article) {
      state.articles.push(article);
    },

    updateArticle(state, article) {
      state.article = article;
    },

    getAuthors(state, payload) {
      state.authors = payload;
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
      
      axios.get('/api/articles')
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
    
        axios.post('http://localhost:8000/api/articles', article)
          .then(res => {
            // console.log(res.data.article);
            commit('addStoredArticleToArray',res.data.article);
            })
          .catch(error => console.log(error))
    },

    getArticle({commit, state}, article){
     
      axios.get('/api/articles/'+ article)
            .then(function (response) {
              // handle success
              // console.log(response.data);
              // console.log(response.data.article.comments[0].user.name)

              commit('updateArticle', response.data.article);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
    },

    updateArticle({commit, state}, article){
      // console.log(article);
      axios.put('/api/articles/'+article.id, article)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        commit('updateArticle', response.data.article);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },

    getAuthors({commit}) {
      axios.get('/api/users')
            .then(function (response) {
              // handle success
              console.log("im from store", response.data)
              commit('getAuthors', response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
    },

  },
  getters:{
      authors(state){
        return state.authors;
      },

      articles(state) {
        return state.articles;
      },

      article(state) {
        // console.log(state.article);
        return state.article;
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
      },

  }

})