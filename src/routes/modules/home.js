const homeRoute = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../../views/HomePage.vue'),
  },
];

export default homeRoute;
