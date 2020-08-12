<template>
  <div class="page__container">
    <div class="exp__container w-9/12 xl:w-6/12 mx-auto overflow-y-auto overflow-x-hidden">
      <div v-if="allExperience && (allExperience.length > 0)">
        <div v-for="(exp) in allExperience" :key="exp._id" class="px-8">
          <p class>{{exp.date_debut}} à {{exp.date_fin}} ~ {{exp.duree}}</p>
          <h2 class="text-lg sm:text-2xl font-medium my-3">
            {{exp.title}} ~
            <span class="underline">{{exp.company}}</span>
          </h2>
          <block-content :blocks="exp.job_descriptionRaw" />
          <p class="mt-4 underline">
            <span class="font-medium">{{exp.job_type}}</span>
            ~
            {{exp.city}}
          </p>
          <hr class="border-gray-500 border-opacity-50 my-8 mx-auto w-1/2" />
        </div>
      </div>
    </div>
    <img src="~/assets/img/pill.png" alt="background image" class="exp__image">
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
import { getExperiences } from "@/queries/queries.js";
import Vue from "vue";
import BlockContent from "sanity-blocks-vue-component";
Vue.component("block-content", BlockContent);

export default {
  name: "experiences",
  apollo: {
    allExperience: {
      prefetch: true,
      query: getExperiences,
    },
  },
};
</script>

<style scoped>

.exp__container {
  height: 80vh;
  z-index: 5;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%,-50%);
}
.exp__image{
  position: fixed;
  left: -20%;
  bottom: calc(-30vw*1.2);
  z-index: 0;
  opacity: .5;
}
</style>