// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import 'firebase/firestore';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

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
      studentId: 0
    }
  },
  methods: {
    addInstructor(instructorName) {
      firebaseDb.collection('/instructors').doc('0').set({
        instructorName: instructorName,
        averageScore: 0
      }).then(function () {
        console.log('Instructor successfully added');
        // TODO this.instructorId++;
      }).catch(error => {
        console.error('Error writing document' + error);
      });
    },
    addCourse(courseCode, courseName, instructors) { // use empty array for instructors to create without instr.
      firebaseDb.collection('/courses').doc('/' + courseName).set({
        courseCode: courseCode,
        courseName: courseName,
        instructors: instructors
      }).then(() => {
        console.log('Course is successfully added');
      }).catch(error => {
        console.error('Error writing document ' + error);
      });
    },
    addStudent(studentEmail, studentPassword) {
      firebaseDb.collection('/students').doc('/' + this.studentId).set({
        studentEmail: studentEmail,
        studentPassword: studentPassword,
        studentNickname: '',
        studentId: this.studentId,
      }).then(() => {
        console.log('Student is successfully added');
        this.studentId++;
      }).catch(error => {
        console.error('Error writing document');
      });
    },
    setStudentNicknameWithStudentEmailPromise(studentEmail, nickname) {
      return new Promise((resolve,reject) => {
        firebaseDb.collection('students').where('studentEmail', '==', studentEmail).get().then(students => {
          students.docs.forEach(doc => {
            doc.set({
              studentEmail: studentEmail,
              studentNickname: nickname
            })
          })
          console.log('Student nickname is successfully changed. New nickname is set to ' + nickname);
          resolve();
        }).catch(error => {
          console.error("Something bad happened");
          reject(error);
        });
      })
    },
    getStudentWithEmailPromise(studentEmail) {
      var studentFound = {};

      return new Promise((resolve, reject) => {
        firebaseDb.collection('students').where('studentEmail', '==', studentEmail)
                  .get().then(snapshot => {
          snapshot.docs.forEach(student => {
            console.log(student.data());
            studentFound = student.data();
          })
          resolve(studentFound);
        }).catch(error => {
          console.log('Student with mail address: ' + studentEmail + ' not found.');
          reject(error);
        })
      })
    },
    getCourseWithCourseCodePromise(courseCode) {  // TODO CS diye de aratılabilir direk boşluğu sil. ya ikisini de sil ya boşluksuz koy
      return new Promise((resolve, reject) => {
        firebaseDb.collection('courses').get().then(snapshot => {
          snapshot.docs.forEach(doc => {
            if (doc.data().courseCode === courseCode) {
              resolve(doc.data());
            }
          });
        }).catch(error => {
          console.error('Document not found');
          reject();
        });
      });
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      this.setStudentNicknameWithStudentEmailPromise('cemal.onur@ozu.edu.tr', '31cicemal');
      this.getStudentWithEmailPromise('cemal.onur@ozu.edu.tr').then(student => {
          console.log(student)
        })
      }
    )
  }
})
			// TODO getInstructorListWithCourseCode
			// TODO submitAnswersWithCourseCodeAndInstructorName
			// TODO getQuestionListWithRating
			// TODO getResultsPromise
