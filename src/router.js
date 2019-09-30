import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import VueRouter from 'vue-router';

import Users from './Users.vue';
import Home from './Home.vue';

const People = () => import('./People.vue');
const Properties = () => import('./Properties.vue');
const House  = () =>import('./House.vue');
const Apartment = () => import('./Apartment.vue');

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
			component:  Users
		},
		{
			path: '/people/:id',
			name: 'people',
			props: true,
			component: People
		},
		{
			path: '/properties',
			name: 'properties',
			component: Properties,
			children: [
				{
					path: 'house',
					component: House
				},
				{
					path: 'apartment',
					component: Apartment
				}
			]
		}
    ]
});