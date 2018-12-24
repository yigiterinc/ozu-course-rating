<template>
  <div class="results-page">
    <nav-bar></nav-bar>
    <div class="container">
      <h3>{{ this.rating.course.courseCode }} - {{ this.rating.course.courseName }}</h3>
      <hr>
      <br>
    <results :questions="questions"
             :new-average-points-list="getNewAverageRatingsList()"
             :previous-average-points-list="getSplitted(prevAverage)"
             :redirectedFromEvaluationPage="redirectedFromEvaluationPage">
    </results>
    </div>
  </div>
</template>

<script>
  import Results from './results.vue';
  import {firebaseDb} from '../../main.js'
  import NavBar from '../nav-bar/nav-bar.vue';

    export default {
    components: {
      Results,
      NavBar
    },
      props: ['redirectedFromEvaluationPage', 'Rating', 'ratingId', 'prevAverage'],

      data() {
        return {
          name: "results-page",
          questions: [],
          rating: this.Rating,
          newAveragePointsList: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }
     },
      methods: {
        getNewAverageRatingsList: function () {
          for (let i = 0; i < this.rating.questions.length; i++) {
            let question = this.rating.questions[i];
            let sumOfQuestion = 0;
            for (let j = 0; j < question.answers.length; j++) {
              sumOfQuestion += question.answers[j];
            }
            if (question.answers.length !== 0)
              this.newAveragePointsList[i] = sumOfQuestion / question.answers.length;
          }
          console.log(this.newAveragePointsList);
          return this.newAveragePointsList;
        },
        setQuestionsFromRating: function() {
          this.rating.questions.forEach(question => {
            this.questions.push(question.questionText);
          })
        },
        getRatingWithId: function() {
          console.log('getting rating');
          return new Promise((resolve,reject) => {
            firebaseDb.collection('/ratings')
              .doc(this.ratingId)
              .get().then(rating => {
              console.log(rating.data());
              resolve(rating);
            }).catch(error => {
              reject('An error occurred while getting the rating with id:' + error);
            })
          })
        },
        getSplitted: function (string) {
          if (string === '' || typeof string === "undefined") return this.getNewAverageRatingsList();
          return string.split(',');
        }
      },
      mounted () {
        this.getRatingWithId().then(rating => {
          this.rating = rating.data();
          this.questions = rating.data().questions;
          this.setQuestionsFromRating();
        });
      }
    }
</script>

<style scoped>
  .container {
    padding-top: 20px;
  }
</style>
