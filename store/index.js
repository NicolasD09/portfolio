import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: () => ({
    theme: "theme-light",
    modalShowedOnce: false
  }),
  mutations: {
    switchTheme(state) {
      state.theme = state.theme === "theme-light" ? "theme-dark" : "theme-light"
    },
    showModal(state) {
      state.modalShowedOnce = true;
    }
  }
});
