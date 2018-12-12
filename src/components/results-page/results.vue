<template>
  <div>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <result v-for="(question,index) in questions"
                  :questionText="question.questionText"
                  :question-index="index + 1"
                  :previous-average-rating="previousAverageRatingsList[index]"
                  :new-average-rating="newAverageRatingsList[index]"
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
      props: ['questions','newAverageRatingsList','previousAverageRatingsList',
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
            return 'gray'
          else if (averageRating < 4)
            return 'deeppink'
          else if (averageRating < 5.00)
            return 'green'
          else return 'blue'
        },
        fillColors: function () {
          for (let i = 0; i < this.previousAverageRatingsList.length; i++) {
            let prevColor = this.getTextColor(this.previousAverageRatingsList[i])
            let newColor = this.getTextColor(this.newAverageRatingsList[i])

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
