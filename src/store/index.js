import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import ideas from "./ideas";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    ideas
  }
});
