import Vue from 'vue';
import Router from 'vue-router';
import homeRoute from './modules/home';
import eligibilityRoute from './modules/eligibility';

Vue.use(Router);

const routes = [
  ...homeRoute,
  ...eligibilityRoute,
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
