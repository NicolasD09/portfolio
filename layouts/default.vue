<template>
  <div v-bind:class="theme" id="app">
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
    Navbar
  },
  computed: {
    theme: {
      get: function() {
        return store.state.theme;
      }
    }
  },
  mounted() {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // if (userPrefersDark) {
    //   store.commit("switchTheme");
    // }
  }
};
</script>

<style>
.layout {
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;
}

/* .layout_mobile {
  min-height: 100vh;
} */

.pb-55 {
  padding-bottom: 55px;
}
</style>
