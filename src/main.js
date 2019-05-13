import Vue from "vue";
import App from "./App.vue";
import Vue2TouchEvents from "vue2-touch-events";
import SmoothScrollbar from "vue-smooth-scrollbar";
import Vuelidate from "vuelidate";

import "fullpage.js/vendors/scrolloverflow";
import VueFullPage from "vue-fullpage.js";

Vue.use(VueFullPage);

Vue.use(SmoothScrollbar, {
  alwaysShowTracks: true
});

Vue.use(Vue2TouchEvents);
Vue.use(Vuelidate);

// Components
import "./components/ui";

import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
