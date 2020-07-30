import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: () => ({
    theme: "theme-light"
  }),
  mutations: {
    switchTheme(state) {
      state.theme = state.theme === "theme-light" ? "theme-dark" : "theme-light"
    }
  }
});
