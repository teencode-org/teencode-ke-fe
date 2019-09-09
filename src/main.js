import Vue from 'vue';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App.vue';
import router from './routes';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
