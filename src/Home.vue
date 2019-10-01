<template>
  <div class="row">
    <!-- <h1>Welcome to Wander Place.</h1> -->

    <div class="col-md-6">
     
      <div>
        <b-img fluid :src="`${publicPath}images/raymund.jpg`"  alt="Responsive image"></b-img>
      </div>
     
    </div>
    <div class="col-md-6">
      asdf
    </div>
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