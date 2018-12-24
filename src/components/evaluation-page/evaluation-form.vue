<template>
    <b-form @submit="this.onSubmit">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p>If you want to show your name or use a nickname that is going to be displayed with your comments,
          feel free to enter it</p>
          <b-form-input v-model="nickname"
                        type="text"
                        placeholder="Nickname (Optional)">
          </b-form-input>
          <br><br>
        </div>
        <div class="col-md-3"></div>
      </div>

      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <question v-for="(question,index) in questions"
                    :questionText="question.questionText"
                    :question-index="++index"
                    @send-answer="getAnswer">
          </question>
        </div>
        <br>
        <div class="col-md-1"></div>
      </div>
        <p class="comments-label"><strong>Additional Comments and Suggestions</strong></p>
        <hr>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <p>If you have any additional comments please write them below.</p>
          <b-form-textarea v-model="additionalComments"
                           placeholder="Write your answer to here"
                           :rows="3"
                           :max-rows="6">
         </b-form-textarea>
          <br>
          <p>What would you suggest to other students who aim to pass this course with a high grade?</p>
          <b-form-textarea v-model="suggestions"
                           placeholder="Write your answer to here"
                           :rows="3"
                           :max-rows="6">
          </b-form-textarea>
          <br>
        </div>
        <div class="col-md-2"></div>
      </div>
        <b-button variant="success" v-on:click="onSubmit">Submit</b-button>
    </b-form>
</template>
<script>
    import Question from './question.vue'
    import {firebaseDb} from '../../main.js'

    export default {
      name: 'evaluation-form',
      components: { Question },
      data () {
        return {
          nickname: "",
          suggestions: '',
          additionalComments: '',
          questions: this.rating.questions,
          newQuestions: [],
          answers : [0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
      },
      props: {
        rating: {},
        ratingId: 0
      },
      methods: {
        onSubmit(evt) {
          console.log('im in');
          this.updateAnswers();
          this.updateCommentsAndSuggestions();
          this.submitEvaluation().then(() => {
            //this.$router.push({ path: '/results-page/' + this.ratingId});
            console.log('returned from promise');
          });
        },
        submitEvaluation: function() { //TODO submit answers, suggestionsAndRatings with nickname
          console.log('im in');
          if (this.rating.commentsAndSuggestions && this.newQuestions) {
            return new Promise((resolve,reject) => {
              firebaseDb.collection('ratings/').doc(this.ratingId).update({
                //  commentsAndSuggestions: this.rating.commentsAndSuggestions,
                  questions: this.newQuestions,
                }
              ).then(() => {
                console.log('updated!');
                resolve();
              }).catch(error => {
                reject('An error occurred while submitting the form:' + error);
              })
            })
          }
        },
        getAnswer(e) {
          this.answers[e.index] = e.answer;
          //this.setNewQuestions();
        },
        updateCommentsAndSuggestions: function() {
            this.rating.commentsAndSuggestions.push({nickname: this.nickname,
              comment: this.comment,
              suggestion: this.suggestion});
        },
        updateAnswers: function() {
          this.newQuestions.forEach((question,index) => {
            question.answers.push(this.answers[index]);
          })
          console.log(this.newQuestions)
        },
        mounted() {
          this.newQuestions = this.rating.questions;
        }
      },
    }
</script>
<style scoped>
    .comments-label {
        font-size: 150%;
    }
</style>
