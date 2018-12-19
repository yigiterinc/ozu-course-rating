<template>
  <div >
    <b-navbar id="container" fixed="top" toggleable="lg" type="dark" variant="danger">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" >OzuCourseRating</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" >

          <b-navbar-nav id="coursesSection">
            <b-nav-item href="#/search-page">Courses</b-nav-item>
            <b-nav-item href="#/authentication-page" v-if="!isLogged">Login</b-nav-item>
            <b-nav-item href="#" v-if="isLogged" @click="this.logOut">Log Out</b-nav-item>
          </b-navbar-nav>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "nav-bar",
        probs: {
          isLogged: false
        },
        methods: {
          logOut : function(){
              this.isLogged = false;
        }
        }
    }

</script>

<style scoped>
  #container {
    background-color: #a30050 !important;
  }

  #coursesSection {
    margin-right: 70px;
  }

</style>
