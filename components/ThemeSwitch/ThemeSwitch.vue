<template>
  <label class="toggle" :class="theme === 'theme-light' ? 'light' : 'dark'">
    <input type="checkbox" name="toggle" id="toggle" @change="switchTheme" />
  </label>
</template>

<script>
import { store } from "@/store/index.js";
import Vue from "vue";

export default {
  methods: {
    switchTheme() {
      store.commit("switchTheme");
    },
  },
    computed: {
    theme: {
      get: function() {
        return store.state.theme
      }
    }
  },
};
</script>

<style src="./ThemeSwitch.css">
</style>