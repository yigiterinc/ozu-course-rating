<template>
  <b-container>
  <div class="notfound-page" style="background: gray">
    <div id="navbar">
      <b-navbar id="navContainer" fixed="top" toggleable="lg" type="dark" variant="danger">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" >OzuCourseRating</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" >

            <b-navbar-nav id="coursesSection">
              <b-nav-item href="#">Courses</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav id="homeSection">
              <b-nav-item href="#">Home</b-nav-item>
            </b-navbar-nav>

          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>

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
  </b-container>
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

  #navContainer {
    background-color: #a30050 !important;
  }

  #coursesSection, #homeSection {
    margin-right: 70px;
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
