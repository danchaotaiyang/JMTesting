import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Axios from 'axios';

Vue.prototype.$http = Axios;

new Vue({
    router, store,
    render: h => h(App)
}).$mount('#app');

import '@/assets/sass/layout.scss';
