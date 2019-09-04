<template>
  <div id="app">
     <h1>Let's Go Somewhere</h1>
     <hr>
    
     <router-link to="/">Home</router-link>&nbsp;
     <router-link to="/users/10">Users 10</router-link>&nbsp;
     <router-link to="/products/2">Products</router-link>
      
     <hr>
     <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
