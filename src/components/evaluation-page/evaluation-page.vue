<template>
  <div class="evaluation-page">
    <div class="container">
      <h3>{{ this.course.courseCode }} - {{ this.course.courseName }}</h3>
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


