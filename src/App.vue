<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import HomePage from './components/home-page/home-page.vue'
export default {
  name: 'App',
  components: {
    HomePage
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
