<template>
  <div class="evaluation-page">
    <navbar></navbar>
    <div class="container">
      <h3>{{ this.rating.course.courseCode }}
        - {{ this.rating.course.courseName }}</h3>
      <hr>
      <br>
      <div class="container">
        <evaluation-form :rating="rating" :rating-id="ratingId"></evaluation-form>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
  import EvaluationForm from "./evaluation-form";
  import Navbar from '../nav-bar/nav-bar.vue'
  import {firebaseDb} from '../../main.js'

  export default {
    name: 'evaluation-page',
    components: {
      EvaluationForm,
      Navbar
    },
    props: ['ratingId'],
    data() {
      return {
        questions: [],
        additionalComments: "",
        suggestions: "",
        rating: {} //TODO pass this from search page
      }
    },
    methods: {
      setQuestionsFromRating: function(rating) {
        rating.questions.forEach(question => {
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
      }
    },
    mounted () {
      this.getRatingWithId().then(rating => {
        this.rating = rating.data();
        console.log(this.rating);
        this.setQuestionsFromRating(this.rating);
    });
    }
    }
</script>

<style scoped>
</style>


