<template>
  <div v-bind:class="theme" id="app">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import { store } from "@/store/index.js";

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
  },
  computed: {
    theme: {
      get: function () {
        return store.state.theme;
      },
    },
  },
  Mounted() {
    if (window.matchMedia("(prefers-color-scheme)").media !== 'not all')
      store.commit("switchTheme");
  },
};
</script>

<style>
</style>
