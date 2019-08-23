const homeRoute = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../../views/Home.vue'),
  },
];

export default homeRoute;
