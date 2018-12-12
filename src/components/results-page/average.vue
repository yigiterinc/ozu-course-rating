<template>
    <div>
      <div class="row" v-if="redirectedFromEvaluationPage">
        <div class="col-lg-3"></div>
        <div class="col-lg-3 col-md-6">
          <i>Previous Average</i>
          <hr>
          <strong v-if="colors" v-bind:style="{color: colors.prevColor}">{{ previousAverageRating }}</strong>
        </div>
        <div class="col-lg-3 col-md-6">
          <i>New Average</i>
          <hr>
          <strong v-if="colors" v-bind:style="{color: colors.newColor}">{{ newAverageRating }}</strong>
        </div>
        <div class="col-lg-3"></div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col">
            <i>Average Points</i>
            <hr>
            <strong v-if="colors" v-bind:style="{color: colors.prevColor}">{{ previousAverageRating }}</strong>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'Average',
      props: ['previousAverageRating','newAverageRating',
              'colors', 'redirectedFromEvaluationPage']
    }
</script>
