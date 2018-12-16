<template>
  <div class="evaluation-page">
    <div class="container">
      <h3>{{ this.searchResultsAsRatings[0].course.course_code }}
             - {{ this.searchResultsAsRatings[0].course.course_name }}</h3>
      <hr>
      <br>
      <div class="container">
        <evaluation-form :additional-comments="this.additionalComments"
                         :questions="this.questions" :suggestions="this.suggestions"
                         :course="searchResultsAsRatings[0].course">
        </evaluation-form>
      </div>
      <br>
    </div>
  </div>
</template>


<script>
  import QuestionList from './question-list.json';
  import SearchResultsAsRatings from '../search-page/searchResultsAsRatings.json';
  import EvaluationForm from "./evaluation-form"; // question list is going to be fetched from db by backend

  export default {
      name: 'evaluation-page',
      components: {
        EvaluationForm,
        },
      // props: ['course'] // a course object is passed when it is called from search component
      data() {
        return {
          questions: QuestionList,
          additionalComments: "",
          suggestions: "",
          searchResultsAsRatings: SearchResultsAsRatings
        }
      }
    }
</script>


