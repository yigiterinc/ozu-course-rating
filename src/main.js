// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyALyabHb4nbmFkMOmm21Rt4OxAgYysWUVM",
  authDomain: "ozu-course-rating.firebaseapp.com",
  databaseURL: "https://ozu-course-rating.firebaseio.com",
  projectId: "ozu-course-rating",
  storageBucket: "ozu-course-rating.appspot.com",
  messagingSenderId: "553541406411"
};

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
