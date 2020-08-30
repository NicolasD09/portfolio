<template>
  <div>
    <transition name="exp-fade">
      <div v-if="this.main_show" class="page__container p-8 w-11/12 mx-auto">
        <div class="exp__container mx-auto">
          <h1
            class="text-4xl mb-20 underline text-center"
            v-if="allExperiencesPage"
          >
            {{ allExperiencesPage[0].experience_title.fr }}
          </h1>
          <div
            v-if="allExperience && allExperience.length > 0"
            class="border-gray-500 border-l-2 border-r-2 w-11/12 xl:w-7/12 mx-auto"
          >
            <div
              v-for="(exp, index) in allExperience"
              :key="index"
              class="sm:px-8 w-10/12 mx-auto"
            >
              <p class>
                {{ exp.start_date }} - {{ exp.end_date }} ~
                {{ exp.time_span.fr }}
              </p>
              <h2 class="text-lg sm:text-2xl font-medium my-3">
                {{ exp.title.fr }} ~
                <span class="underline">{{ exp.company }}</span>
              </h2>
              <p>{{ exp.job_description.fr }}</p>
              <p class="mt-4 underline">
                <span class="font-medium">{{ exp.job_type.fr }}</span>
                ~
                {{ exp.city }}
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
import { getExperiences, getExperienceData } from "@/queries/queries.js";
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
    allExperiencesPage: {
      prefetch: true,
      query: getExperienceData
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
