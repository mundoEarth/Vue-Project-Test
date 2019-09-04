import Vue from 'vue';
import VueRouter from 'vue-router';

import Users from './Users.vue';
import Home from './Home.vue';
import Products from './Products.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/', 
			name: 'home',
			component: Home
		},
		{
			path: '/users/:teamId', 
			name: 'users',
			component: Users
		},
		{
			path: '/products/:id',
			name: 'products',
			props: true,
			component: Products
		}	    
    ]
});