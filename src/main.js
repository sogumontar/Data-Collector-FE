import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import BootstrapVue from "bootstrap-vue";
import './style/bootstrap.min.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'https://www.portal-desa.web.id/public/api',
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
