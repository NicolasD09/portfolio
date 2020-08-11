<template>
  <div v-if="allProject && (allProject.length > 0)">
    <div class="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 w-10/12 mx-auto">
      <div v-for="(project) in allProject" :key="project._id" class="p-8">
        <h1 class="text-2xl lg:text-4xl font-medium">{{project.title}}</h1>
        <hr class="border-gray-500 border-opacity-50 my-6 w-1/2" />
        <block-content :blocks="project.long_descriptionRaw" />
        <hr class="border-gray-500 border-opacity-50 my-6 w-1/2" />
        <h3 class="text-xl md:text-2xl font-medium">Technologies :</h3>
        <ul>
          <li v-for="(technology,index) in project.technologies" :key="index">{{technology}}</li>
        </ul>
        <div class="flex flex-col sm:flex-row">
          <Button class="mt-12" type="primary">
            <a :href="project.link" target="_blank">
              <span>Visiter le site</span>
            </a>
          </Button>
          <Button class="mt-4 sm:mt-12 sm:ml-8" type="secondary" to="/projets">Retourner aux projets</Button>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <div class="overflow-y-auto flex flex-row justify-center">
          <div class="project__image__container pr-4">
            <img class="mx-auto" :src="allProject[0].image.asset.url" :alt="allProject[0].alt_text" />
          </div>
        </div>
      </div>
    </div>
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
      longDescription: [],
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
};
</script>

<style scoped>
ul {
  list-style: inside;
  list-style-type: " > ";
  padding-left: 1em;
}

li::marker {
  font-size: 1.1rem;
}

.project__image__container {
  max-height: 80vh;
  width: fit-content;
}
p {
  font-size: 1.2rem;
  margin-top: 1rem;
}
</style>