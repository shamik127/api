require('./bootstrap');

window.Vue = require('vue');
import VueResource from 'vue-resource';
import store from './store.js';

Vue.use(VueResource)

import App from './components/App';

const app = new Vue({
    el: '#app',
    store,
    components: { App }
});
