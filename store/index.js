import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: () => ({
    theme: "theme-light"
  }),
  mutations: {
    switchTheme(state) {
      if (state.theme === "theme-light") {
        state.theme = "theme-dark";
      } else {
        state.theme = "theme-light";
      }
    }
  }
});
