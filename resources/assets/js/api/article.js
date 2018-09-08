import { EXPERTS_CONFIG } from '../config.js';

export default {
    getArticles: function() {
        return axios.get(EXPERTS_CONFIG.API_URL + '/articles');
    },

    getArticle: function(articleId) {
        return axios.get(EXPERTS_CONFIG.API_URL + '/articles/' + articleId);
    }
}