import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

import '@/assets/sass/layout.scss';
