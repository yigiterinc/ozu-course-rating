<template>
  <div class="evaluation-page">
    <div class="container">
      <h3>{{ this.course.courseCode }} - {{ this.course.courseName }}</h3>
      <hr>
      <br>
      <div class="container">
      <b-form @submit="this.onSubmit">
        <question v-for="(question,index) in questions" :questionText="question.questionText" :question-index="index"></question>
        <br>
        <p class="comments-label"><strong>Additional Comments and Suggestions</strong></p>
        <hr>
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
        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
      </div>
      <br>
    </div>
  </div>
</template>


<script>
  import Course from './course.json'
  import Question from './question.vue'
  import QuestionList from './question-list.json' // question list is going to be fetched from db by backend

  export default {
      name: 'evaluation-page',
      components: {
        Question,
      },
      // props: ['course'] // a course object is passed when it is called from search component
      data() {
        return {
          course: Course,
          questions: QuestionList,
          additionalComments: "",
          suggestions: ""
        }
      },
    methods: {
      onSubmit (evt) {
        // submit user's answers to database. foreach question, call submitAnswer
        // redirect to results page for that course
      },
    }
    }
</script>


<style scoped>
 .comments-label {
   font-size: 150%;
 }
</style>
