<template>
  <div class="overflow-auto">
    <b-pagination-nav
      :link-gen="linkGen"      
      :number-of-pages="pages"
      @change="changePage"
      :limit="10"
      use-router
    ></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    props: ['pagination'],    
    data() {
        return {
    
        }
    },
    methods: {
        linkGen(pageNum) {
            return pageNum === 1 ? '?' : `?page=${pageNum}`
        },       
      // pageGen(pageNum) {
      //   console.log('pageGen => ' + this.links[pageNum - 1].slice(1));
      //   return this.links[pageNum - 1].slice(1)
      // }
        changePage(pageNum) {
            // console.log('pageNum => ' + pageNum);
            if (pageNum > this.pagination.last_page) {
                    pageNum = this.pagination.last_page;
            }

            this.pagination.current_page = pageNum;
            this.$emit('paginate');
        }
    },
    computed: {
        pages() {            
            let total_page = 0;
            total_page = Math.ceil( this.pagination.total / 3 );
            
            return total_page;
           
        }
    }
  }
</script>