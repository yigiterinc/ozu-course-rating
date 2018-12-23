import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import 'firebase/firestore';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import questions from './components/evaluation-page/question-list.json';
import courses from './components/evaluation-page/courses.json';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyALyabHb4nbmFkMOmm21Rt4OxAgYysWUVM',
  authDomain: 'ozu-course-rating.firebaseapp.com',
  databaseURL: 'https://ozu-course-rating.firebaseio.com',
  projectId: 'ozu-course-rating',
  storageBucket: 'ozu-course-rating.appspot.com',
  messagingSenderId: '553541406411'
};

firebase.initializeApp(config);
export const firebaseDb = firebase.firestore();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  data() {
    return {
      questions: questions,
      courses: courses,
    };
  },
  methods: {
    addCourse(courseCode, courseName, instructorName) {
      firebaseDb.collection('/courses').doc().set({
        courseCode: courseCode,
        courseName: courseName,
        instructor: {
          instructorName: instructorName,
          averageRating: 0
        }
      }).then(() => {
        console.log('Course is successfully added');
      }).catch(error => {
        console.error('Error writing document ' + error);
      });
    },
    addStudent(studentEmail, studentPassword) {
      firebaseDb.collection('/students').doc().set({
        studentEmail: studentEmail,
        studentPassword: studentPassword,
        studentNickname: '',
      }).then(() => {
        console.log('Student is successfully added');
      }).catch(error => {
        console.error('Error writing document');
      });
    },
    setStudentNicknameWithStudentEmailPromise(studentEmail, nickname) { //TODO fix this.
      return new Promise((resolve, reject) => {
        firebaseDb.collection('students')
          .where('studentEmail', '==', studentEmail)
          .get().then(students => {
          students.docs.forEach(doc => {
            doc.set({
              studentEmail: studentEmail,
              studentNickname: nickname
            });
          });
          console.log('Student nickname is successfully changed. New nickname is set to ' + nickname);
          resolve();
        }).catch(error => {
          console.error('Something bad happened');
          reject(error);
        });
      });
    },
    getStudentWithEmailPromise(studentEmail) {
      var studentFound = {};

      return new Promise((resolve, reject) => {
        firebaseDb.collection('students').where
        ('studentEmail', '==', studentEmail)
          .get().then(snapshot => {
          snapshot.docs.forEach(student => {
            console.log(student.data());
            studentFound = student.data();
          });
          resolve(studentFound);
        }).catch(error => {
          console.log('Student with mail address: ' + studentEmail + ' not found.');
          reject(error);
        });
      });
    },
    getAllCoursesPromise: function() {
      let courseList = [];
      return new Promise((resolve, reject) => {
        firebaseDb.collection('courses').get().then(courses => {
          courses.forEach(course => {
            courseList.push(course.data());
          });
          resolve(courseList);
        }).catch(error => {
          console.log('An error occurred while getting the courses:' + error);
          reject();
        });
      });
    },
    getCourseWithCourseCodeAndInstructorNamePromise: function(courseCode, instructorName) {
      let courses = [];
      return new Promise((resolve, reject) => {
        firebaseDb.collection('courses')
          .where('courseCode', '==', courseCode)
          .where('instructor.instructorName', '==', instructorName)
          .get().then(snapshot => {
          snapshot.docs.forEach(doc => {
            courses.push(doc.data());
          });
          resolve(courses);
        }).catch(error => {
          console.error('Document not found');
          reject();
        });
      });
    },
    addCoursesToDatabase: function(courses) {
      courses.forEach(course => {
        this.getCourseWithCourseCodeAndInstructorNamePromise
        (course.courseCode,
          course.instructor.instructorName).then(result => {
          if (result.length === 0 || typeof result === 'undefined') {
            console.log('Course not found, adding to db');
            this.addCourse(course.courseCode,
              course.courseName,
              course.instructor.instructorName);
          }
        });
      });
    },
    ratingExistsForCourseCodeInstructorPair: function(courseCode, instructorName) {
      return new Promise((resolve, reject) => {
        firebaseDb.collection('ratings')
          .where('course.courseCode', '==', courseCode)
          .where('course.instructor.instructorName', '==', instructorName)
          .get().then(snapshot => {
          let size = snapshot.docs.length;
          resolve(!(size === 0));
        }).catch(error => {
          console.log(error);
          reject();
        });
      });
    },
    addRatingsForAllCourses: function(questionList) {
      return new Promise((resolve,reject) => {
        this.getAllCoursesPromise().then(courses => {
          courses.forEach(course => {
            const courseCode = course.courseCode;
            const instructorName = course.instructor.instructorName;
            this.ratingExistsForCourseCodeInstructorPair(courseCode, instructorName)
              .then(existStatus => {
                if (!existStatus) {
                  firebaseDb.collection('ratings').doc()
                    .set({
                      course: course,
                      questions: questionList,
                      commentsAndSuggestions: [] // {comment,suggestion,nickname} objects are going to be pushed.
                    }).then(() => {
                    console.log('Rating is successfully added.');
                  }).catch(error => {
                    console.log('An error occurred while adding the rating:' + error);
                    reject();
                  });
                }
                resolve();
              }).catch(error => {
              console.log('An error occurred while adding ratings' + error);
              reject();
            });
          });
          resolve();
        }).catch(error => {
          console.log('An error occurred while adding ratings' + error);
          reject();
        });
      });
    }
  },
  mounted() {
    window.addEventListener('load', () => {
        this.addCoursesToDatabase(this.courses);
        this.addRatingsForAllCourses(this.questions);
      }
    );
  }
});
