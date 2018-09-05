require('./bootstrap');

window.Vue = require('vue');
import VueResource from 'vue-resource'

Vue.use(VueResource)

import App from './components/App';

const app = new Vue({
    el: '#app',
    components: { App }
});
