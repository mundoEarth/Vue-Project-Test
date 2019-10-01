

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BNavbar } from 'bootstrap-vue'
import { BImg } from 'bootstrap-vue'


Vue.component('b-img', BImg)
Vue.component('b-navbar', BNavbar)

import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)


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
