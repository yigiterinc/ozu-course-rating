<template>
  <div id="app">
    <results-page :redirected-from-evaluation-page="true"></results-page>
  </div>
</template>

<script>
  import ResultsPage from './components/results-page/results-page.vue'


export default {
  name: 'App',
  components: {
    ResultsPage
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
