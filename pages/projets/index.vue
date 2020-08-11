<template>
  <div class="page__container">
    <div class="w-2/12 flex flex-row justify-between mx-auto mt-8 mb-12">
      <a @click="toggleActive" data-filter="web" class="button text-2xl active cursor-pointer">Web</a>
      <a @click="toggleActive" data-filter="design" class="button text-2xl cursor-pointer">Design</a>
      <a @click="toggleActive" data-filter="logo" class="button text-2xl cursor-pointer">Logos</a>
    </div>
    <div class="projects__container w-7/12 mx-auto my-auto overflow-y-auto overflow-x-hidden">
      <div v-if="allProject && (allProject.length > 0)">
        <transition-group tag="div" name="project-fade">
          <div class="mx-auto mr-6" v-for="project in allProject" :key="project._id">
            <div class="projects__project grid grid-cols-2 grid-rows-1 gap-8 items-center p-4 pt-0">
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
            <hr class="border-gray-500 border-opacity-50 my-8 mx-auto w-1/2" />
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
import Button from "@/components/Button/Button";
import { getAllProjects } from "@/queries/queries.js";

export default {
  data() {
    return {
      filter: "web",
    };
  },
  apollo: {
    allProject: {
      prefetch: true,
      query: getAllProjects,
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
<style scoped>
body {
  overflow: hidden;
  height: 100vh;
}
.projects__img__bottom {
  animation: spin 80s linear infinite;
  transform-origin: center;
  position: fixed;
  left: -13%;
  bottom: -20%;
  height: 70%;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.projects__container {
  height: 70vh;
}

.projects__img__right {
  height: 90%;
  position: fixed;
  right: 0;
  bottom: 1.2em;
}

.projects__project__img {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  transition-duration: .2s;
}
.projects__project__img:hover {
  transform: scale(1.05);
}


a.button.active {
  border-bottom: 3px solid var(--light-blue);
  font-weight: 700;
  transition: all 0.3s ease-in-out;
}

a.button:hover {
  transform: translateY(-1px);
  border-bottom: 3px solid var(--light-blue);
  font-weight: 700;
  transition: all 0.2s ease-in-out;
}

.project-fade-enter-active,
.project-fade-leave-active {
  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: .5s;
}

.project-fade-enter-active {
  transition-delay: .5s;
}

.project-fade-enter,
.project-fade-leave-to {
  opacity: 0;
  transform: translateY(30px)
}

.projects__project {
  border-left: 5px solid rgba(1, 82, 162,0.5);
}

</style>