<template>
  <div >
    <b-navbar id="container" fixed="top" toggleable="lg" type="dark" variant="danger">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" >OzuCourseRating</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" >

          <b-navbar-nav id="courses">
            <b-nav-item href="#">Courses</b-nav-item>
          </b-navbar-nav>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "nav-bar"
    }
</script>

<style scoped>
  #container {
    background-color: #a30050 !important;
  }

  #courses {
    margin-right: 70px;
  }

</style>
