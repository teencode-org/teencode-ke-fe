import Vue from 'vue';
import Router from 'vue-router';
import homeRoute from './modules/home';
import aboutRoute from './modules/about';

Vue.use(Router);

const routes = [
  ...homeRoute,
  ...aboutRoute,
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
