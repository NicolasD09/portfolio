<template>
  <div class="page__container">
    <div class="w-2/12 flex flex-row justify-between mx-auto mt-8 mb-12">
      <a @click="toggleActive" data-filter="web" class="button text-2xl active cursor-pointer">Web</a>
      <a @click="toggleActive" data-filter="design" class="button text-2xl cursor-pointer">Design</a>
      <a @click="toggleActive" data-filter="logo" class="button text-2xl cursor-pointer">Logos</a>
    </div>
    <div class="projects__container w-6/12 mx-auto my-auto overflow-y-auto overflow-x-hidden">
      <div v-if="allProject && (allProject.length > 0)">
        <transition-group tag="div" name="project-fade">
          <div class="mx-auto mb-8 mr-6" v-for="project in allProject" :key="project._id">
            <div
              class="grid grid-cols-2 grid-rows-1 gap-8 items-center border-b-2 border-gray-500 border-opacity-50 p-4"
            >
              <div class="flex flex-col justify-between">
                <h3 class="text-3xl">{{ project.title }}</h3>
                <div
                  class="my-1"
                  v-for="paragraph in project.short_descriptionRaw"
                  :key="paragraph._key"
                >
                  <p v-for="text in paragraph.children" :key="text._key">{{text.text}}</p>
                </div>

                <Button class="mt-2" :to="'/projets/'+project.slug" type="secondary">Voir le projet</Button>
              </div>
              <a :href="project.link" title="Voir le site" target="blank_">
                <img
                  class="rounded-lg h-auto projects__project__img"
                  :src="project.thumbnail.asset.url"
                  :alt="project.alt_text"
                />
              </a>
            </div>
          </div>
        </transition-group>
      </div>
      <p v-else class="text-xl">Il n'y a pas encore de projets dans cette catégorie.</p>
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
  data() {
    return {
      filter: "web",
    };
  },
  apollo: {
    allProject: {
      prefetch: true,
      query: gql`
        query getAllProjects($filter: String!) {
          allProject(where: { project_type: { eq: $filter } }) {
            _id
            title
            slug
            link
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
      variables() {
        return {
          filter: this.filter,
        };
      },
    },
  },
  methods: {
    toggleActive(e) {
      let buttons = document.querySelectorAll("a.button");
      buttons.forEach((btn) => btn.classList.remove("active"));
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active");
      }
      this.filter = e.target.dataset.filter;
    },
  },
};
</script>
<style src="./Projets.css">
</style>