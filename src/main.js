import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import BootstrapVue from "bootstrap-vue";
import './style/bootstrap.min.css';
import VTooltip from "v-tooltip";
import GAuth from 'vue-google-oauth2';
const gauthOption = {
    clientId: 'CLIENT_ID.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.use(VTooltip);
Vue.config.productionTip = false;
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
