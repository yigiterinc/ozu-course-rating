<template>
  <div id="search-page">
    <div class="container">
      <b-form>
        <p>You can search with either course code or course name to evaluate or see the current results.</p>
        <b-form-input v-model="searchedFor"
                      type="text"
                      placeholder="Enter a course">
        </b-form-input>
        <br>
        <b-button variant="success" v-on:click="submitted">Submit</b-button>
        <br><br>
      </b-form>
      Selected: <strong>{{ selected }}</strong>
    </div>

    <div v-if="hasSubmitted">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8">
          <b-table striped :items="tableContents" :fields="fields">
            <template slot="select" slot-scope="row">
              <input type="radio"
                     name="selectCourse"
                     v-bind:value="tableContents[row.index]"
                     v-model="selected"
                     v-on:click="resetSelected()">
            </template>
          </b-table>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {firebaseDb} from '../../main.js'

  export default {
    data() {
      return {
        name: "search-page",
        searchedFor: '',
        hasSubmitted: false,
        fields: ['course_code', 'course_name', 'instructor_name',
          'select'],
        tableContents: [],
        ratingsAsSearchResult: [],
        selected: {},
      }
    },
    methods: {
      submitted: function () {
        this.ratingsAsSearchResult = [];
        if (this.searchedFor !== '' && typeof (this.searchedFor) !== 'undefined') {
          if (!this.hasSubmitted)
            this.hasSubmitted = !this.hasSubmitted;

          this.getRatingsForCourse(this.searchedFor).then(ratings => {
              ratings.forEach(rating => {
                this.ratingsAsSearchResult.push(rating.data());
              });
              this.updateTableContents();
            }
          );
        }
      },
      resetSelected: function() {
        this.selected = {};
      },
      updateTableContents: function() {
        this.tableContents = [];
        this.ratingsAsSearchResult.forEach(rating => {
          console.log(rating);
          this.tableContents.push({
            course_code: rating.course.courseCode,
            course_name: rating.course.courseName,
            instructor_name: rating.course.instructor.instructorName
          });
        })
      },
      isCourseCode: function(string) {
        const spacesRemoved = string.replace(/\s/g, ''); // removes the white spaces
        const courseCodeRegex = /[a-zA-Z]{2,5}\d{3}/;
        const match = courseCodeRegex.exec(spacesRemoved);
        return match;
      },
      getRatingsWithCourseCodePromise: function(courseCode) {
        let ratingList = [];
        const courseCodeWithoutSpaces = courseCode.replace(/\s/g, '');
        const courseCodeUpperCase = courseCodeWithoutSpaces.toUpperCase();
        return new Promise((resolve, reject) => {
          firebaseDb.collection('ratings')
            .where('course.courseCode', '==', courseCodeUpperCase)
            .get().then(ratings => {
            ratings.forEach(rating => {
              ratingList.push(rating);
            });
            resolve(ratingList);
          }).catch(error => {
            console.log('An error occurred while ' +
              'getting ratings with course code' + error);
            reject();
          });
        });
      },
      getRatingsWithCourseNamePromise: function(courseName) {
        let ratingList = [];
        const courseNameLowerCase = courseName.toLowerCase();
        return new Promise((resolve, reject) => {
          firebaseDb.collection('ratings')
            .where('course.courseName', '==', courseNameLowerCase)
            .get().then(ratings => {
            ratings.forEach(rating => {
              ratingList.push(rating);
            });
            resolve(ratingList);
          }).catch(error => {
            console.log('An error occurred while ' +
              'getting ratings with course name' + error);
            reject();
          });
        });
      },
      getRatingsForCourse: function(searchInput) {
        if (this.isCourseCode(searchInput)) {
          console.log('course code detected');
          return this.getRatingsWithCourseCodePromise(searchInput);
        } else {
          console.log('course name detected');
          return this.getRatingsWithCourseNamePromise(searchInput);
        }
      },
    },
    mounted () {
      this.updateTableContents();
    }
  }
</script>

<style scoped>

</style>

