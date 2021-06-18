import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import BootstrapVue from "bootstrap-vue";
import VueApexCharts from 'vue-apexcharts'
import './style/bootstrap.min.css';
import VTooltip from "v-tooltip";
import mdbClassMixin from "mdbvue/src/mixins/mdbClassMixin";
import Vuetify from 'vuetify/lib'
import "font-awesome/css/font-awesome.min.css";

//defined as global component
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);


Vue.use(VueApexCharts)
const gauthOption = {
    clientId: 'CLIENT_ID.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_' +
        'account'
}
Vue.use(Vuetify)
Vue.use(mdbClassMixin);
Vue.use(VTooltip);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueApexCharts);
Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  // baseURL: 'https://www.portal-desa.web.id/BE/api',
  baseURL: 'https://sotardok.web.id/spam-detector/api',
});
Vue.component('apexchart', VueApexCharts)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
