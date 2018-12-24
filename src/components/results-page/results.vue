<template>
  <div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <result v-for="(question,index) in questions"
                v-if="question.questionText"
                  :questionText="question.questionText"
                  :question-index="index + 1"
                  :previous-average-point="previousAveragePointsList[index]"
                  :new-average-point="newAveragePointsList[index]"
                  :colors="colors[index]"
                  :redirected-from-evaluation-page="redirectedFromEvaluationPage">
        </result>
      </div>
      <br>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
  import Result from './result'

    export default {
      components: {
        Result
      },
      props: ['questions','newAveragePointsList','previousAveragePointsList',
              'redirectedFromEvaluationPage'],
      data () {
        return {
          name: "results",
          colors: []
        }
      },
      methods: {
        getTextColor: function (averageRating) {
          if (averageRating <= 2.00)
            return 'gray';
          else if (averageRating < 4)
            return 'deeppink';
          else if (averageRating < 5.00)
            return 'green';
          else return 'blue'
        },
        fillColors: function () {
          for (let i = 0; i < this.previousAveragePointsList.length; i++) {
            let prevColor = this.getTextColor(this.previousAveragePointsList[i]);
            let newColor = this.getTextColor(this.newAveragePointsList[i]);

            this.colors.push({prevColor, newColor})
          }
        }
      },
      mounted () {
        window.addEventListener('load', () => {
          this.fillColors()
        })
      }
    }
</script>

<style scoped>

</style>
