<template>
  <div class="question">
    <div class="container">
      <div>
      <p class="question-index"><strong>Question {{ this.questionIndex }}</strong></p>
      <p>{{ this.questionText }}</p>
      </div>
      <br>

      <div class="container">
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-2" v-for="rating in HIGHEST_RATING">
            <input type="radio" :value="rating" v-model="result" >
            <label> {{rating}} </label>
          </div>
        </div>
      </div>
    <br>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['questionText','questionIndex'],
    data() {
      return {
        result: 0,
        HIGHEST_RATING: 5
      }
    },
  }
</script>

<style scoped>
  .question-index {
    font-size: 150%;
  }
</style>
