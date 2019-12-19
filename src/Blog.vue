<template>
	<div>
		<h3>Blog Page</h3>
		<modal />
		<div class="box">
			<div class="form-group">
				<input type="text" class="form-control" v-model="search_blog">
				<button @click="fetchPosts">Search</button>
			</div>
			<article>
				<div class="content" v-for="post in posts" :key="post.id">

					<h1>
						ID {{ post.id }} {{ post.title }}
					</h1>
					<p>
						{{ post.body }}
					</p>
				</div>
			</article>
			<div class="pagination">
				<!-- <pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="fetchPosts()"></pagination> -->
			</div>
		</div>
		<b-pagination :pagination="pagination" :search_blog="search_blog" @paginate="fetchPosts()"/>

	</div>
	
</template>


<script type="text/javascript">
import axios from 'axios'
  
// window.Vue = require('vue');
// import Vue from 'vue';
// import PaginationComponent from './components/PaginationComponent';
import BPaginationComponent from './components/BPaginationComponent';
import Modal from './components/Modal';
// Vue.component('pagination', require('./components/PaginationComponent.vue'));


export default {
	data() {
		return {
			posts: {},
			pagination: {
				'current_page': 1,
				'total' : 1,
			},			
			search_blog: '',
		}
	},
	mounted() {
		this.fetchPosts();
	},
	components: {
		// 'pagination': PaginationComponent,
		'b-pagination': BPaginationComponent,
		'modal': Modal,
	}, 
    methods: {
        fetchPosts() {
            axios.get('http://127.0.0.1:8000/api/posts?page=' + this.pagination.current_page + '&search_blog=' + this.search_blog)
                .then(response => {
                    this.posts = response.data.data.data;
                    this.pagination = response.data.pagination;
                    // this.search_blog = '';
                     // console.log(this.pagination);
                     // console.log('search_blog => ' + this.search_blog);
                })
                .catch(error => {
					window.console.log(error.response.data);
                });
		},
		showModal() {
		      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
	    },
	    hideModal() {
	      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
	    },
	    toggleModal() {
	      this.$root.$emit('bv::toggle::modal', 'modal-1', '#btnToggle')
	    }
    },
	
}
</script>
