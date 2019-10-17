

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BNavbar } from 'bootstrap-vue'
import { BImg } from 'bootstrap-vue'
import { BContainer } from 'bootstrap-vue'
import { PaginationNavPlugin } from 'bootstrap-vue'

Vue.use(PaginationNavPlugin)
Vue.component('b-container', BContainer)
Vue.component('b-img', BImg)
Vue.component('b-navbar', BNavbar)


Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
