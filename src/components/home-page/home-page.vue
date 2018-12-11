<template>
  <div>
    <nav-bar></nav-bar>
    <jumbotron></jumbotron>
    <steps></steps>
  </div>
</template>

<script>
  import NavBar from '/Users/sarpozturk/ozu-course-rating/src/components/home-page/nav-bar.vue';
  import Jumbotron from '/Users/sarpozturk/ozu-course-rating/src/components/home-page/jumbotron.vue';
  import Steps from '/Users/sarpozturk/ozu-course-rating/src/components/home-page/steps.vue'
  export default {
        name: "home-page",
        components: {
          NavBar,
          Jumbotron,
          Steps
        }
        
    }
</script>

<style scoped>

</style>
