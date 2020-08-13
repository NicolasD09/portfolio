<template>
  <div>
    <transition name="project-fade">
      <div v-if="this.main_show">
        <div
          class="flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-2 w-10/12 xl:w-8/12 mx-auto py-8"
        >
          <div v-for="(project) in allProject" :key="project._id" class="mx-auto py-6 sm:p-8">
            <h1 class="text-2xl lg:text-4xl font-medium">{{project.title}}</h1>
            <hr class="border-gray-500 border-opacity-50 my-6 w-1/2" />
            <div v-if="project.long_descriptionRaw">
              <block-content :blocks="project.long_descriptionRaw" />
            </div>
            <p v-else>Pas de description pour l'instant</p>
            <hr class="border-gray-500 border-opacity-50 my-6 w-1/2" />
            <h3 class="text-xl md:text-2xl font-medium">Technologies :</h3>
            <div v-if="project.technologies">
              <ul>
                <li v-for="(technology,index) in project.technologies" :key="index">{{technology}}</li>
              </ul>
            </div>
            <p v-else>Pas de technologies associées</p>
            <div class="flex flex-col sm:flex-row">
              <Button v-if="project.link" class="mt-12 sm:mr-8" type="primary">
                <a :href="project.link" target="_blank">
                  <span>Visiter le site</span>
                </a>
              </Button>
              <Button class="mt-4 sm:mt-12" type="secondary" to="/projets">Retourner aux projets</Button>
            </div>
          </div>
          <div class="flex flex-row justify-center">
            <div v-if="allProject[0].image" class="overflow-y-auto flex flex-row justify-center">
              <div class="project__image__container pr-4">
                <img
                  class="mx-auto"
                  :src="allProject[0].image.asset.url"
                  :alt="allProject[0].alt_text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { getProject } from "@/queries/queries.js";
import Button from "@/components/Button/Button";
import Vue from "vue";
import BlockContent from "sanity-blocks-vue-component";
Vue.component("block-content", BlockContent);

export default {
  data() {
    return {
      main_show: false,
    };
  },
  apollo: {
    allProject: {
      query: getProject,
      prefetch: true,
      variables() {
        return {
          slug: this.slug,
        };
      },
    },
  },
  computed: {
    slug: function () {
      return this.$route.params.slug;
    },
  },
  mounted() {
    setTimeout(() => {
      this.main_show = true;
    }, 400);
  },
};
</script>

<style scoped>

.project__image__container {
  max-height: 80vh;
  width: fit-content;
}
p {
  font-size: 1.2rem;
  margin-top: 1rem;
}

/* Animations */

.project-fade-enter-active,
.project-fade-leave-active {
  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
}

.project-fade-enter-active {
  transition-delay: 0.5s;
}

.project-fade-enter,
.project-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>