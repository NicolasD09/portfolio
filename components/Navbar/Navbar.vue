<template>
  <div>
    <div
      class="flex flex-row content-start align-baseline py-4 md:px-8 sm:px-4 px-2 desktop_nav"
    >
      <div class="hidden lg:flex lg:flex-col-reverse lg:justify-around">
        <!-- <ThemeSwitch /> -->

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
      <div
        class="burger cursor-pointer mt-2 lg:hidden flex flex-col items-end h-auto"
        @click="navSlide"
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>

    <div class="flex flex-col navbar">
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
        <!-- <li class="my-5" @click="navSlide">
          <nuxt-link to="/about">
            <span class="text-md">A propos</span>
          </nuxt-link>
        </li> -->
        <li class="my-5" @click="navSlide">
          <nuxt-link to="/contact">
            <span class="text-md">Contact</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";

export default {
  methods: {
    navSlide() {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".navbar");
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    }
  }
};
</script>

<style src="./Navbar.css"></style>
