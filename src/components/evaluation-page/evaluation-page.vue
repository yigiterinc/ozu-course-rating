<template>
  <div class="evaluation-page">
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

    <div class="container">
      <h3 id="courseHeader">{{ this.course.courseCode }} - {{ this.course.courseName }}</h3>
      <hr>
      <br>
      <div class="container">
        <evaluation-form :additional-comments="this.additionalComments"
                         :questions="this.questions" :suggestions="this.suggestions" :course="this.course">
        </evaluation-form>
      </div>
      <br>
    </div>
  </div>
</template>


<script>
  import Course from './course.json'
  import QuestionList from './question-list.json'
  import EvaluationForm from "./evaluation-form"; // question list is going to be fetched from db by backend

  export default {
      name: 'evaluation-page',
      components: {
        EvaluationForm,
        },
      // props: ['course'] // a course object is passed when it is called from search component
      data() {
        return {
          course: Course,
          questions: QuestionList,
          additionalComments: "",
          suggestions: ""
        }
      }
    }
</script>

<style scoped>
  #navContainer {
    background-color: #a30050 !important;
  }

  #coursesSection, #homeSection {
    margin-right: 70px;
  }

  #courseHeader {
    padding-top: 20px;
  }
</style>


