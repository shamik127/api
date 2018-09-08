import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { articles }  from './modules/articles.js';

export default new Vuex.Store({
    modules: {
        articles
    }
})