import Vue from 'vue';
import Router from 'vue-router';
import homeRoute from './modules/home';

Vue.use(Router);

const routes = [
  ...homeRoute,
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
