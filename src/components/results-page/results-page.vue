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
      <h3>{{ this.rating[0].course.course_code }} - {{ this.rating[0].course.course_name }}</h3>
      <hr>
      <br>
    <results :questions="questions"
             :new-average-points-list="newAveragePointsList"
             :previous-average-points-list="previousAveragePointsList"
              :redirectedFromEvaluationPage="redirectedFromEvaluationPage">
    </results>
    </div>
  </div>
</template>

<script>
  import EvaluationResults from './evaluation-results.json';
  import Results from './results.vue';
  import QuestionList from '../evaluation-page/question-list.json';

    export default {
    components: {
      results: Results
    },
      props: ['redirectedFromEvaluationPage'], // if true, previous page is evaluation page else search page
      // rating is going to be a prop in here

      data() {
        return {
          evaluationResults: EvaluationResults,   // TODO this will be fetched from db via results-page dto
          name: "results-page",
          questions: QuestionList,
          rating: {},
          chosenInstructor: "Reyhan Aydoğan",
          //props: [previousAveragePointsList, course, chosenInstructor], // TODO previous component will calculate average ratings and pass it
          previousAveragePointsList: [4.52, 5.00, 1.24, 2.12, 4.12, 2.24, 1.44,
            4.21, 1.11, 0.23, 0.73, 2.32, 1.24], // TODO passed from evaluation-page
          newAveragePointsList: [],
        }
     },
      methods: {
        setNewAverageRatingsList: function () {
          this.evaluationResults.forEach(question => {
            this.newAveragePointsList.push(question.average)
          })
        },
        getAllAnswersForRating: function(rating) {
          const questions = rating.questions;
          const answers = [[]];
          questions.forEach(question => {
            answers.push(question.answers);
          });
          return answers;
        },
        getAnswersForQuestion: function(rating, questionNumber) { // for example: 3rd question, starting from 1
          const questions = rating.questions;
          return questions[questionNumber - 1].answers;
        },
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
