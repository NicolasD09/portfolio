<template>
  <div class="page__container">
    <div class="w-2/12 flex flex-row justify-between mx-auto mt-8 mb-12">
      <button @click="toggleActive" class="button text-2xl">Web</button>
      <button @click="toggleActive" class="button text-2xl">Design</button>
      <button @click="toggleActive" class="button text-2xl">Logos</button>
    </div>
    <div class="projects__container w-6/12 mx-auto my-auto overflow-y-auto">
      <div v-if="!this.$apollo.queries.allProject.loading">
        <div class="mx-auto" v-for="project in allProject" :key="project._id">
          <div class="grid grid-cols-2 grid-rows-1 gap-8 items-center border-b-2 border-gray-400 pb-4">
            <div class="flex flex-col justify-between">
              <h3 class="text-3xl">{{ project.title }}</h3>
              <p class="my-1" v-for="text in project.short_descriptionRaw" :key="text._key">{{text.children[0].text}}</p>
              <Button class="mt-2" :to="'/projets/'+project.slug" type="secondary">Voir plus</Button>
            </div>
            <img
              class="rounded-lg h-auto projects__project__img"
              :src="project.thumbnail.asset.url"
              :alt="project.alt_text"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <img src="~/assets/img/atom.png" alt="atom image" class="projects__img__bottom" />
    </div>
    <div>
      <img
        src="~/assets/img/curves_right.png"
        alt="curves right"
        class="projects__img__right absolute bottom-0 right-0"
      />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Button from "@/components/Button/Button";

export default {
  apollo: {
    allProject: {
      query: gql`
        query getAllProjects {
          allProject {
            _id
            title
            slug
            short_descriptionRaw
            alt_text
            thumbnail {
              asset {
                url
              }
            }
          }
        }
      `,
    },
  },
  methods: {
    toggleActive(e) {
      let buttons = document.querySelectorAll('button.button');
      buttons.forEach(btn => btn.classList.remove('active'));
      
      e.target.classList.toggle('active');
    }
  },
};
</script>
<style src="./Projets.css">
</style>