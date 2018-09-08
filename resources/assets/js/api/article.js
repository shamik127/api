import { EXPERTS_CONFIG } from '../config.js';

export default {
    /*
    getArticles: function() {
        return axios.get(EXPERTS_CONFIG.API_URL + '/articles');
    },
    */

   getArticles: function() {
    return axios.get("https://newsapi.org/v1/articles?source=reuters&apiKey=d4850e40dbe941518185860fd3a35655");
    },

    getArticle: function(articleId) {
        return axios.get(EXPERTS_CONFIG.API_URL + '/articles/' + articleId);
    }
}