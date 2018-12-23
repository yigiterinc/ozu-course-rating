<template>
  <div class="question">
    <div class="container">
      <div>
        <p class="question-index"><strong>Question {{ this.questionIndex }}</strong></p>
        <p>{{ this.questionText }}</p>
        <br>
        <average :previous-average-point="previousAveragePoint"
                 :new-average-point="newAveragePoint"
                 :colors="colors"
                 :redirected-from-evaluation-page="redirectedFromEvaluationPage">
        </average>
      </div>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
  import Average from "./average";

  export default {
    components: {Average},
    props: ['questionText','questionIndex','previousAveragePoint',
            'newAveragePoint', 'colors', 'redirectedFromEvaluationPage'],
  }
</script>

<style scoped>
  .question-index {
    font-size: 150%;
  }
</style>
