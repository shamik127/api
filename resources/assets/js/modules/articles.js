import ArticlesAPI from '../api/article.js';

export const articles = {
    state: {
        articles: [],
        articlesLoadStatus: 0,
        article: {},
        articleLoadStatus: 0
    },

    getters: {
        getArticles: function(state) {
            return state.articles;
        },
        getArticlesLoadStatus: function(state) {
            return state.articlesLoadStatus;
        },
        getArticle: function(state) {
            return state.article;
        },
        getArticleLoadStatus: function(state) {
            return state.articleLoadStatus;
        }
    },

    actions: {
        loadArticles: function({commit}) {
            commit('setArticlesLoadStatus', 1);
            ArticlesAPI.getCafes()
            .then(function(response) {
                commit('setArticles', response.data);
                commit('setArticlesLoadStatus', 2);
            })
            .catch(function(error) {
                commit('setArticlesLoadStatus', 3);
                console.log(error);
            })
        },
        loadArticle: function({commit}, data) {
            commit('setArticleLoadStatus', 1);
            ArticlesAPI.getArticle(articleId)
            .then(function(response) {
                commit('setArticle', response.data);
                commit('setArticleLoadStatus', 2);
            })
            .catch(function(error){
                commit('setArticleLoadStatus', 3);
                console.log(error);
            })
        }
    },
    mutations: {
        setArticles: function(state, data) {
            state.articles = data;
        },
        setArticlesLoadStatus: function(state, data) {
            state.articlesLoadStatus = data;
        },
        setArticle: function (state, data) {
            state.article = data;
        },
        setArticleLoadStatus: function(state, data) {
            state.articleLoadStatus = data;
        }
    }
}