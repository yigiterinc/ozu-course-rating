<template>
  <div id="app">
    <search-page></search-page>
  </div>
</template>

<script>
  import ResultsPage from './components/results-page/results-page.vue'
  import EvaluationPage from './components/evaluation-page/evaluation-page.vue'
  import SearchPage from './components/search-page/search-page.vue'
  import HomePage from './components/home-page/home-page'

export default {
  name: 'App',
  components: {
    SearchPage,
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
