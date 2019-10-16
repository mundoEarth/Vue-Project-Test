<template>
	<div>
		<h3>Blog Page</h3>
		<div class="box">
			<article>
				<div class="content" v-for="post in posts" :key="post.id">
					<h1>
						{{ post.title }}
					</h1>
					<p>
						{{ post.body }}
					</p>
				</div>
			</article>
			<div class="pagination">
				<pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="fetchPosts()"></pagination>
			</div>
		</div>
	</div>
</template>


<script type="text/javascript">
import axios from 'axios'
  
// window.Vue = require('vue');
// import Vue from 'vue';
import PaginationComponent from './components/PaginationComponent';
// Vue.component('pagination', require('./components/PaginationComponent.vue'));


export default {
	data() {
		return {
			posts: {},
			pagination: {
				'current_page': 1
			}
		}
	},
	components: {
		'pagination': PaginationComponent,
	}, 
    methods: {
        fetchPosts() {
            axios.get('http://127.0.0.1:8000/api/posts?page=' + this.pagination.current_page)
                .then(response => {
                    this.posts = response.data.data.data;
                    this.pagination = response.data.pagination;
                })
                .catch(error => {
					window.console.log(error.response.data);
                });
		}
    },
	mounted() {
		this.fetchPosts();
	}
}
</script>
