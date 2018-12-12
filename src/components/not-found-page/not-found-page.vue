<template>
  <div class="notfound-page" style="background: gray">
    <b-jumbotron bg-variant="white">
      <b-col>
        <b-row class="justify-content-md-center">
          <h1>404 Error</h1>
        </b-row>
        <b-row class="justify-content-md-center">
          <h2>Page not found</h2>
        </b-row>
        <b-row>
          <p> </p>
        </b-row>
        <b-row class="justify-content-md-center">
          <p><b>Ooops!</b> Page you are looking for does not exist.<br>
            Click the logo above to return home page.</p>
        </b-row>
        <br>
        <b-row class="justify-content-md-center">
          <b>{{jokes[randomNumber()]}}</b>
        </b-row>
      </b-col>
    </b-jumbotron>
  </div>
</template>

<script>
    export default {
        name: "not-found-page",
        data(){
          return{
            jokes: [
              "The page you wanted is taking a long lunch.",
              "Your lucky numbers for today: 4, 0, 4.",
              "The page you requested is taking a coffee break.",
              "Hope you didn't pay too much for that URL."
            ]
          }
        },
        methods : {
          randomNumber : function(){
            return Math.floor(Math.random() * 3)
          }
        }
    }
</script>

<style scoped>
  * {
  }
  b-jumbotron{
    background-size: cover;
  }
  h1{
    font-size: 400%;
  }
  h2{
    font-size: 150%;
    font-weight: normal;
  }
</style>
