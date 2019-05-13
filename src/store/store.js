import Vue from "vue";
import Vuex from "vuex";
import * as popup from "@/store/modules/popup.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    popup
  }
});
