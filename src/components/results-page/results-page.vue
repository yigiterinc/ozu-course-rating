<template>
  <div class="results-page">
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

    <div class="container">
      <h3>{{ this.course.courseCode }} - {{ this.course.courseName }}</h3>
      <hr>
      <br>
    <results :questions="questionList"
             :newAverageRatingsList="newAverageRatingsList"
             :previousAverageRatingsList="previousAverageRatingsList"
              :redirectedFromEvaluationPage="redirectedFromEvaluationPage">
    </results>
    </div>
  </div>
</template>

<script>
  import EvaluationResults from './evaluation-results.json'
  import Course from '../evaluation-page/course.json'
  import Results from './results.vue'
  import QuestionList from '../evaluation-page/question-list.json'

    export default {
    components: {
      results: Results
    },
      props: ['redirectedFromEvaluationPage'], // if true, previous page is evaluation page else search page

      data() {
        return {
          evaluationResults: EvaluationResults,   // TODO this will be fetched from db via results-page dto
          name: "results-page",
          questionList: QuestionList,
          course: Course,
          chosenInstructor: "Reyhan Aydoğan",
          //props: [previousAverageRatingsList, course, chosenInstructor], // TODO previous component will calculate average ratings and pass it
          previousAverageRatingsList: [4.52, 5.00, 1.24, 2.12, 4.12, 2.24, 1.44,
            4.21, 1.11, 0.23, 0.73, 2.32, 1.24], // TODO passed from evaluation-page
          newAverageRatingsList: [],
        }
     },
      methods: {
        setNewAverageRatingsList: function () {
          this.evaluationResults.forEach(question => {
            this.newAverageRatingsList.push(question.average)
          })
        },
        getResultsPromise: function () {
          // TODO
        }
      },
      mounted () {
        this.setNewAverageRatingsList()
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

  .container {
    padding-top: 20px;
  }
</style>
