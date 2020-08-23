<template>
  <div>
    <transition name="exp-fade">
      <div
        v-if="this.main_show"
        class="page__container flex flex-col items-start lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-20 p-8 w-11/12 mx-auto"
      >
        <div class="exp__container overflow-y-auto overflow-x-hidden">
          <h1 class="text-4xl mb-8 underline text-center">Expériences</h1>
          <div v-if="allExperience && allExperience.length > 0">
            <div v-for="exp in allExperience" :key="exp._id" class="sm:px-8">
              <p class>
                {{ exp.date_debut }} à {{ exp.date_fin }} ~ {{ exp.duree }}
              </p>
              <h2 class="text-lg sm:text-2xl font-medium my-3">
                {{ exp.title }} ~
                <span class="underline">{{ exp.company }}</span>
              </h2>
              <block-content :blocks="exp.job_descriptionRaw" />
              <p class="mt-4 underline">
                <span class="font-medium">{{ exp.job_type }}</span>
                ~
                {{ exp.city }}
              </p>
              <hr
                class="border-gray-500 border-opacity-50 my-8 mx-auto w-1/2"
              />
            </div>
          </div>
        </div>
        <div
          class="hidden lg:block border-gray-500 border-l-2 border-opacity-50 middle__border"
        ></div>
        <div class="diplomas__container overflow-y-auto overflow-x-hidden">
          <h1 class="text-4xl mb-8 underline text-center">Diplômes</h1>
          <div v-if="allDiploma && allDiploma.length > 0">
            <div
              v-for="diploma in allDiploma"
              :key="diploma._id"
              class="sm:px-8"
            >
              <p class>{{ diploma.date_debut }} à {{ diploma.date_fin }}</p>
              <h2 class="text-lg sm:text-2xl font-medium my-3">
                {{ diploma.title }}
              </h2>
              <block-content :blocks="diploma.descriptionRaw" />
              <p class="mt-4 underline">
                <span class="font-medium">{{ diploma.school }}</span>
                ~
                {{ diploma.city }}
              </p>
              <hr
                class="border-gray-500 border-opacity-50 my-8 mx-auto w-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
    <img
      src="~/assets/img/pill.webp"
      alt="background image"
      class="exp__image"
    />
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import { getExperiences, getDiplomas } from "@/queries/queries.js";
import Vue from "vue";
import BlockContent from "sanity-blocks-vue-component";
Vue.component("block-content", BlockContent);

export default {
  data() {
    return {
      main_show: false
    };
  },
  name: "experiences",
  apollo: {
    allExperience: {
      prefetch: true,
      query: getExperiences
    },
    allDiploma: {
      prefetch: true,
      query: getDiplomas
    }
  },
  mounted() {
    setTimeout(() => {
      this.main_show = true;
    }, 200);
  }
};
</script>

<style scoped>
* {
  z-index: 5;
}

.exp__image {
  position: fixed;
  left: -20%;
  bottom: calc(-30vw * 1.2);
  z-index: 0;
  opacity: 0.5;
}

.middle__border {
  position: absolute;
  left: 50%;
  height: 100%;
}

/* Animations */

.exp-fade-enter-active,
.exp-fade-leave-active {
  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
}

.exp-fade-enter-active {
  transition-delay: 0.5s;
}

.exp-fade-enter,
.exp-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
