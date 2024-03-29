// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHighcharts from 'vue-highcharts';
require("bulma/css/bulma.css");
require("font-awesome/css/font-awesome.min.css");
Vue.config.productionTip = false

Vue.use(VueHighcharts);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
