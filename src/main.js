import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios';

Vue.prototype.$http = Axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

import '@/assets/sass/layout.scss';
