<template>
  <div>
    <div
      class="flex flex-row items-center mobile_nav sm:desktop_nav sm:justify-around z-50 sm:bg-transparent"
    >
      <div
        class="hidden sm:flex sm:flex-col-reverse sm:justify-around sm:content-end"
      >
        <ThemeSwitch />
        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/">
          <span class="text-xl">Accueil</span>
        </nuxt-link>

        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/projets">
          <span class="text-xl">Projets</span>
        </nuxt-link>

        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/experiences">
          <span class="text-xl">Expériences</span>
        </nuxt-link>

        <!-- <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/about">
          <span class="text-xl">A propos</span>
        </nuxt-link> -->

        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/contact">
          <span class="text-xl">Contact</span>
        </nuxt-link>
      </div>

      <!-- <transition name="fade-spin">
        <div class="menu_icon_container" v-if="closeShow">
          <i class="gg-close gg-icon" @click="navSlide"></i>
        </div>
      </transition> -->
      <div
        class="h-6 flex flex-row justify-center items-center menu_icon_container"
      >
        <i class="gg-menu" id="icon" @click="navSlide"></i>
      </div>
    </div>

    <div class="flex flex-col" id="navbar">
      <ul>
        <li class="my-5" @click="navSlide">
          <nuxt-link to="/">
            <span class="text-md">Accueil</span>
          </nuxt-link>
        </li>
        <li class="my-5" @click="navSlide">
          <nuxt-link to="/projets">
            <span class="text-md">Projets</span>
          </nuxt-link>
        </li>
        <li class="my-5" @click="navSlide">
          <nuxt-link to="/experiences">
            <span class="text-md">Expériences</span>
          </nuxt-link>
        </li>
        <li class="my-5" @click="navSlide">
          <nuxt-link to="/about">
            <span class="text-md">A propos</span>
          </nuxt-link>
        </li>
        <li class="my-5" @click="navSlide">
          <nuxt-link to="/contact">
            <span class="text-md">Contact</span>
          </nuxt-link>
        </li>
      </ul>
      <ThemeSwitch class="block absolute bottom-0 mb-20" />
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";

export default {
  data() {
    return {
      closeShow: false
    };
  },
  methods: {
    navSlide() {
      const burger = document.querySelector(".mobile #icon");
      const nav = document.querySelector(".mobile #navbar");
      nav.classList.toggle("nav-active");

      burger.classList.toggle("gg-menu");
      burger.classList.toggle("gg-close");
    }
  },
  components: {
    ThemeSwitch
  }
};
</script>

<style src="./Navbar.css"></style>
