<template>
  <div class="page__container">
    <transition name="project-fade">
      <div v-if="this.main_show">
        <div
          class="w-8/12 sm:w-6/12 md:w-5/12 lg:w-5/12 xl:w-3/12 flex flex-row justify-between mx-auto mt-8 mb-12 filter__links"
        >
          <a
            @click="toggleActive"
            data-filter="web"
            class="button text-lg sm:text-2xl active cursor-pointer"
            >Web</a
          >
          <a
            @click="toggleActive"
            data-filter="design"
            class="button text-lg sm:text-2xl cursor-pointer"
            >Design</a
          >
          <a
            @click="toggleActive"
            data-filter="logo"
            class="button text-lg sm:text-2xl cursor-pointer"
            >Logos</a
          >
        </div>
        <div
          class="projects__container w-10/12 lg:w-9/12 xl:w-7/12 mx-auto my-auto overflow-y-auto overflow-x-hidden"
        >
          <div v-if="allProject && allProject.length > 0">
            <transition-group tag="div" name="project-fade">
              <div
                class="mx-auto mr-6"
                v-for="project in allProject"
                :key="project._id"
              >
                <div
                  class="projects__project flex flex-col items-start lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-8 p-2 pl-4"
                >
                  <div class="flex flex-col">
                    <h3 class="font-medium text-xl lg:text-2xl mb-4">
                      {{ project.title }}
                    </h3>
                    <div
                      class="my-1"
                      v-for="paragraph in project.short_descriptionRaw"
                      :key="paragraph._key"
                    >
                      <p v-for="text in paragraph.children" :key="text._key">
                        {{ text.text }}
                      </p>
                    </div>

                    <Button
                      class="mt-2"
                      :to="'/projets/' + project.slug"
                      type="secondary"
                      >Voir le projet</Button
                    >
                  </div>
                  <a
                    v-if="project.link"
                    :href="project.link"
                    title="Voir le site"
                    target="blank_"
                  >
                    <img
                      class="rounded-lg h-auto projects__project__img"
                      :src="project.thumbnail.asset.url"
                      :alt="project.alt_text"
                    />
                  </a>
                  <img
                    v-else
                    class="rounded-lg h-auto projects__project__img"
                    :src="project.thumbnail.asset.url"
                    :alt="project.alt_text"
                  />
                </div>
                <hr
                  class="border-gray-500 border-opacity-50 my-8 mx-auto w-1/2"
                />
              </div>
            </transition-group>
          </div>

          <p v-else class="text-xl">
            Il n'y a pas encore de projets dans cette catégorie.
          </p>
        </div>
      </div>
    </transition>
    <div>
      <img
        src="~/assets/img/atom.png"
        alt="atom image"
        class="hidden sm:block projects__img__bottom"
      />
    </div>
    <div>
      <img
        src="~/assets/img/curves_right.png"
        alt="curves right"
        class="hidden sm:block projects__img__right absolute bottom-0 right-0"
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
      main_show: false
    };
  },
  apollo: {
    allProject: {
      prefetch: true,
      query: getAllProjects,
      variables() {
        return {
          filter: this.filter
        };
      }
    }
  },
  methods: {
    toggleActive(e) {
      let buttons = document.querySelectorAll("a.button");
      buttons.forEach(btn => btn.classList.remove("active"));
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active");
      }
      this.filter = e.target.dataset.filter;
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
body {
  overflow: hidden;
  height: 100vh;
}
.filter__links {
  position: relative;
  z-index: 10;
}
.projects__img__bottom {
  animation: spin 80s linear infinite;
  transform-origin: center;
  position: fixed;
  left: -5vw;
  bottom: -3vw;
  width: 30vw;
  z-index: 0;
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
  z-index: 10;
  position: relative;
}
.projects__img__right {
  width: clamp(150px, 11vw, 11vw);
  position: fixed;
  right: 0;
  bottom: 1.2em;
  z-index: 0;
}
.projects__project__img {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  transition-duration: 0.2s;
}
.projects__project__img:hover {
  transform: scale(1.05);
}

a.button::after {
  content: "";
  display: block;
  width: 0;
  height: 3px;
  background: var(--light-blue);
  transition: width 0.3s;
}

a.button:hover::after {
  width: 100%;
  transition: width 0.3s;
}

a.button.active::after {
  content: "";
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--light-blue);
}
.projects__project {
  border-left: 5px solid rgba(1, 82, 162, 0.5);
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
