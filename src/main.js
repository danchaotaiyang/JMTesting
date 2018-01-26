import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import Axios from 'axios';
import fastclick from 'fastclick';


Vue.prototype.$http = Axios;

fastclick.attach(document.body);

new Vue({
    router, store,
    render: h => h(App)
}).$mount('#app');

import '@/assets/sass/layout.scss';
