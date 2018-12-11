<template>
  <div id="app">
    <authentication-page></authentication-page>
  </div>
</template>

<script>
  import AuthenticationPage from './components/authentication-page/authentication-page.vue'
  export default {
    name: 'App',
    components: {
      AuthenticationPage
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
