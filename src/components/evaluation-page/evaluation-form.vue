<template>
    <b-form @submit="this.onSubmit">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p><strong>Please select your instructor first before we dive into the evaluation</strong></p>
          <b-form-select v-model="selectedInstructor"
                          :options="courseInstructorNames"
                          :aria-required="true">
          </b-form-select>
          <br><br>
          <p>If you want to show your name or use a nickname that is going to be displayed with you evaluation,
          feel free to enter it below.</p>
          <b-form-input v-model="nickname"
                        type="text"
                        placeholder="Nickname">
          </b-form-input>
          <br><br>
        </div>
        <div class="col-md-3"></div>
      </div>

      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <question v-for="(question,index) in questions"
                    :questionText="question.questionText" :question-index="index + 1">
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
    import courseInstructorList from './course-instructor-list.json'

    export default {
      name: 'evaluation-form',
      components: {Question},
      //courseInstructorNames: [],  // going to be fetched from database, using the course
      data () {
        return {
          selectedInstructor: "",
          nickname: "",
          courseInstructorList: courseInstructorList,
          courseInstructorNames: [],
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
          // submit user's answers to database. foreach question, call submitAnswer, submit nickname
          // redirect to results page for that course
        },
        getInstructorListWithCourseId: function (courseId) {
          // going to fetch the course instructors from db
        },
        setCourseInstructorNamesFromCourseInstructorList: function () {
          this.courseInstructorList.forEach(instructor => {
            this.courseInstructorNames.push(instructor.instructorName)
          })
        }
      },
      mounted() {
        // getInstructorListWithCourseId();
        this.setCourseInstructorNamesFromCourseInstructorList();
      }
    }
</script>
<style scoped>
    .comments-label {
        font-size: 150%;
    }
</style>
