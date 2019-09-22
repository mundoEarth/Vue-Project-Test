

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BNavbar } from 'bootstrap-vue'
Vue.component('b-navbar', BNavbar)

Vue.config.productionTip = false;

new Vue({
	el:'#app',
	router,
	render: h => h(App)
});
// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
