<template>
  <div>
    <b-row>
      <!-- <h1>Welcome to Wander Place.</h1> -->

      
      <b-col sm="12" md="6">
          <b-img fluid :src="`${publicPath}images/raymund.jpg`"  alt="Responsive image"></b-img>
      </b-col>
      
      <b-col sm="12" md="6">
        <div class="mt-5">
          <h5>My name is</h5>
          <h3>Raymund M. Nadela</h3> 
          <p>PHP Web Developer for over four (4) years. This is my sample of headless web application using vuejs for front-end and php laravel for backend.</p>
        </div>
      </b-col>
    </b-row>
    <hr />
   
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>