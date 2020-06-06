import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
// import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      articles: [],
      article: null,

  },
  mutations: {
    updateArticles(state, payload) {
      state.articles = payload;
    },
    storeArticle(state, article) {
      state.article = article;
    },
  },
  actions: {
    getArticles({commit}) {
      axios.get('http://localhost:8000/api/articles')
            .then(function (response) {
              // handle success
              commit('updateArticles', response.data.articles);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            })
    },
    newArticle({commit, dispatch}, article ){},

    storeArticle ({commit}, article) {
    
        axios.post('http://localhost:8000/api/articles', article)
          .then(res => console.log(res))
          .catch(error => console.log(error))
    },
  },
  getters:{
      articles(state) {
        return state.articles;
      }
  }

})