<template>
  <div>
    <h1>About Page</h1>
   {{ id }}

  <div v-if="person">
    <h1>{{ person.name }}</h1>
  </div>
   <!-- <button @click="getData">Get Data</button> -->
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['id'], 
    data: function() {
      return {
        person: null
      }
    },
    methods: {
      getData() {
        // this.id
        var that = this;
        axios.get('https://swapi.co/api/people/1')
        .then(function (response) {
          // handle success
          that.person = response;
          console.log(response);
        })
      }
    },
    mounted: function() {
      this.getData();
    }
  }
</script>

