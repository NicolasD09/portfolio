<template>
  <div>
    <div class="flex flex-row justify-between p-4">
      <div class="logo">
        <svg>
          <!-- 86x206 -->
          <path
            fill-rule="evenodd"
            d="M22.74344804 85.77304857H0V.21135167h29.5825294l28.97545476 62.81522528V.21135167h22.74354692l9.5337413.01655588-.0163139-.01655588s20.2925078-.60698186 31.53179266 5.18063195c10.69845452 5.50857928 25.91289177 21.6270626 25.91289177 21.6270626L174.45189345.21135168h31.53179266l-41.81646749 42.80605968 41.76653708 42.75563722h-31.53179266L154.1974514 65.0736688l-5.9338085-6.07887653-.00098871.00150965-30.88319175-31.62480164c-.0237293-.02450673-.04795296-.04886249-.07168226-.07316793l-.00346053-.00377414c-3.91830093-3.98986659-9.43041996-6.38417905-15.7424142-6.38417905H84.40265419v44.13913517l17.15925126.02415447c12.53796976 0 21.92142548-9.44792276 21.92142548-22.08161966 0-2.05796138-.4824958-3.67434874-1.16471322-5.21379403-.12705064-.30213224-.02521238-.65332826.24223662-.8374055.26695465-.18412756.62536597-.14910357.85326614.0832323 6.91659707 7.02744295 23.22802016 23.6313306 23.22802016 23.6313306s-12.67144709 12.9191223-18.94735301 19.30496197c-5.75435565 5.85544763-12.92851452 5.81267408-12.92851452 5.81267408H92.7311447l-.01928005-.02012873-11.41033357.02012873H44.05552484L22.74344804 39.5835506v46.18949796z"
          />
        </svg>
      </div>
      <button @click="switchTheme">Switch</button>
      <div class="hidden md:block">
        <nuxt-link class="mx-4" to="/">
          <span class="text-xl">Accueil</span>
        </nuxt-link>

        <nuxt-link class="mx-4" to="/projets">
          <span class="text-xl">Projets</span>
        </nuxt-link>

        <nuxt-link class="mx-4" to="/experiences">
          <span class="text-xl">Expériences</span>
        </nuxt-link>

        <nuxt-link class="mx-4" to="/about">
          <span class="text-xl">A propos</span>
        </nuxt-link>

        <nuxt-link class="mx-4" to="/contact">
          <span class="text-xl">Contact</span>
        </nuxt-link>
      </div>
    </div>
    <div class="flex flex-col navbar">
      <ul>
        <li class="my-3">
          <nuxt-link to="/">
            <span class="text-xl">Accueil</span>
          </nuxt-link>
        </li>
        <li class="my-3">
          <nuxt-link to="/projets">
            <span class="text-xl">Projets</span>
          </nuxt-link>
        </li>
        <li class="my-3">
          <nuxt-link to="/experiences">
            <span class="text-xl">Expériences</span>
          </nuxt-link>
        </li>
        <li class="my-3">
          <nuxt-link to="/about">
            <span class="text-xl">A propos</span>
          </nuxt-link>
        </li>
        <li class="my-3">
          <nuxt-link to="/contact">
            <span class="text-xl">Contact</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="burger md:hidden" @click="navSlide">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </div>
</template>

<script>
import { store } from "@/store/index.js";
import Vue from 'vue';

export default {
  methods: {
    navSlide() {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".navbar");
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    },
    switchTheme() {
      store.commit("switchTheme");
    },
  },
};
</script>

<style scoped>
.logo,
.logo svg {
  height: 86px;
  widows: 206px;
}
.logo path {
  fill: var(--bg-logo);
}

.navbar {
  position: absolute;
  right: 0;
  height: 100%;
  top: 0;
  width: 20vh;
  align-items: center;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
}

.navbar ul {
  margin-top: 100px;
}

.burger {
  cursor: pointer;
  position: absolute;
  right: 1em;
  top: 1em;
}

.burger div {
  width: 30px;
  height: 5px;
  margin: 6px;
  border-radius: 5px;
  background-color: rgb(10, 50, 110);
  transition: all 0.3s ease;
}

.burger div:nth-child(2) {
  width: 22px;
}

.nav-active {
  transform: translateX(0%);
  box-shadow: 0px -2px 20px rgba(255, 255, 255, 0.2);
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-9px, 6px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-9px, -6px);
}
</style>