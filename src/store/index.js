import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: null, // store the selected language
  },
  mutations: {
    // change the Language
    setLang(state, value) {
      state.lang = value;
    },
  },
  actions: {},
  modules: {},
});
