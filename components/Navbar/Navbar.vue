<template>
  <div>
    <div class="flex flex-row justify-between items-center lg:items-start py-4 md:px-8 sm:px-4 px-2">
      <div class="logo lg:mx-0">
        <svg>
          <!-- 86x206 -->
          <path
            fill-rule="evenodd"
            d="M22.74344804 85.77304857H0V.21135167h29.5825294l28.97545476 62.81522528V.21135167h22.74354692l9.5337413.01655588-.0163139-.01655588s20.2925078-.60698186 31.53179266 5.18063195c10.69845452 5.50857928 25.91289177 21.6270626 25.91289177 21.6270626L174.45189345.21135168h31.53179266l-41.81646749 42.80605968 41.76653708 42.75563722h-31.53179266L154.1974514 65.0736688l-5.9338085-6.07887653-.00098871.00150965-30.88319175-31.62480164c-.0237293-.02450673-.04795296-.04886249-.07168226-.07316793l-.00346053-.00377414c-3.91830093-3.98986659-9.43041996-6.38417905-15.7424142-6.38417905H84.40265419v44.13913517l17.15925126.02415447c12.53796976 0 21.92142548-9.44792276 21.92142548-22.08161966 0-2.05796138-.4824958-3.67434874-1.16471322-5.21379403-.12705064-.30213224-.02521238-.65332826.24223662-.8374055.26695465-.18412756.62536597-.14910357.85326614.0832323 6.91659707 7.02744295 23.22802016 23.6313306 23.22802016 23.6313306s-12.67144709 12.9191223-18.94735301 19.30496197c-5.75435565 5.85544763-12.92851452 5.81267408-12.92851452 5.81267408H92.7311447l-.01928005-.02012873-11.41033357.02012873H44.05552484L22.74344804 39.5835506v46.18949796z"
          />
        </svg>
      </div>
      <div class="hidden lg:block">
        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/">
          <span class="text-xl">Accueil</span>
        </nuxt-link>

        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/projets">
          <span class="text-xl">Projets</span>
        </nuxt-link>

        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/experiences">
          <span class="text-xl">Expériences</span>
        </nuxt-link>

        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/about">
          <span class="text-xl">A propos</span>
        </nuxt-link>

        <nuxt-link class="xl:mx-10 lg:mx-6 nav-link" to="/contact">
          <span class="text-xl">Contact</span>
        </nuxt-link>
      </div>
      <ThemeSwitch />
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
        <li class="my-5">
          <nuxt-link to="/">
            <span class="text-md">Accueil</span>
          </nuxt-link>
        </li>
        <li class="my-5">
          <nuxt-link to="/projets">
            <span class="text-md">Projets</span>
          </nuxt-link>
        </li>
        <li class="my-5">
          <nuxt-link to="/experiences">
            <span class="text-md">Expériences</span>
          </nuxt-link>
        </li>
        <li class="my-5">
          <nuxt-link to="/about">
            <span class="text-md">A propos</span>
          </nuxt-link>
        </li>
        <li class="my-5">
          <nuxt-link to="/contact">
            <span class="text-md">Contact</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";

export default {
  methods: {
    navSlide() {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".navbar");
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    },
  },
};
</script>

<style src="./Navbar.css">
</style>