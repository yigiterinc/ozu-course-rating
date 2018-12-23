<template>
  <div>
    <b-navbar id="container" fixed="top" toggleable="lg" type="dark" variant="danger">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#" ><a v-on:click="redirectTo('/')"> OzuCourseRating </a></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" >
          <b-navbar-nav id="coursesSection">
            <b-nav-item href="#" v-if="this.$route.path !== '/search-page'">
              <b-nav-item><a v-on:click="redirectTo('/search-page')"> Search Course </a></b-nav-item>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <br><br>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          name: "nav-bar"
        }
      },
      methods: {
        redirectTo: function(nextLocation) {
          location.assign(nextLocation)
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
