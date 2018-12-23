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
                    :questionText="question" :question-index="index + 1">
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
        <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
</template>
<script>
    import Question from './question.vue'
    import courses from './courses.json'

    export default {
      name: 'evaluation-form',
      components: {Question},
      data () {
        return {
          nickname: "",
          courses: courses,
          //TODO answers given should be here to submit.
      }
      },
      props: {
        questions: {},
        additionalComments: {},
        suggestions: {},
        course: {}
      },
      methods: {
        onSubmit(evt) {
          this.submitEvaluation();
        },
        submitEvaluation: function(rating, answers, suggestionAndComment) {
          return new Promise((resolve, reject) => {
            firebaseDb.collection('ratings')
              .where('course.courseName', '==', courseNameLowerCase)
              .get().then(ratings => {
              ratings.forEach(rating => {
                ratingList.push(rating.data());
              });
              resolve(ratingList);
            }).catch(error => {
              console.log('An error occurred while ' +
                'getting ratings with course name' + error);
              reject();
            });
          });
        },
        getInstructorListWithCourseId: function (courseId) {
          // going to fetch the course instructors from db
        },
      },
      mounted() {
        // getInstructorListWithCourseId();
      }
    }
</script>
<style scoped>
    .comments-label {
        font-size: 150%;
    }
</style>
