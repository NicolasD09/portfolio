<template>
  <div v-bind:class="theme" id="app">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { store } from "@/store/index.js";

export default {
  data() {
    return {
      // theme: store.state.theme
    };
  },
  components: {
    Navbar
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

<style>
</style>
