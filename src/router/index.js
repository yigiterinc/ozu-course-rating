import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import result from '../components/results-page/results-page.vue'
import evaluation from '../components/evaluation-page/evaluation-page.vue'
import authentication from '../components/authentication-page/authentication-page.vue'
import home from '../components/home-page/home-page.vue'
import not from '../components/not-found-page/not-found-page.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/AuthenticationPage-page',
      name: 'authentication-page',
      component: authentication
    },
    {
      path: '/EvaluationPage-page',
      name: 'evaluation-page',
      component: evaluation
    },
    {
      path: '/HomePage-page',
      name: 'home-page',
      component: home
    },
    {
      path: '*',
      name: 'not-found-page',
      component: not
    },
    {
      path: '/ResultsPage-page',
      name: 'ResultsPage-page',
      component: result
    }
  ]
});
