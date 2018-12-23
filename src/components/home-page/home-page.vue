<template>
  <div>
    <nav-bar></nav-bar>
    <jumbotron></jumbotron>
    <steps></steps>
  </div>
</template>

<script>
  import NavBar from '../nav-bar/nav-bar.vue';
  import Jumbotron from './jumbotron.vue';
  import Steps from './steps.vue'

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
