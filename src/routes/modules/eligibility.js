const eligibilityRoute = [
  {
    path: '/check-eligibility',
    name: 'check-eligibility',
    component: () => import(/* webpackChunkName: "check-eligibility" */ '../../views/Eligibility.vue'),
  },
];

export default eligibilityRoute;
