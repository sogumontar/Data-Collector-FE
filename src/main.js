import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueApexCharts from "vue-apexcharts/dist/vue-apexcharts";
import BootstrapVue from "bootstrap-vue";
import VueApexCharts from 'vue-apexcharts'
import './style/bootstrap.min.css';
import VTooltip from "v-tooltip";
import GAuth from 'vue-google-oauth2';
Vue.use(VueApexCharts)
const gauthOption = {
    clientId: 'CLIENT_ID.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.use(VTooltip);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueApexCharts);
Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  baseURL: 'https://www.portal-desa.web.id/public/api',
})
Vue.component('apexchart', VueApexCharts)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
