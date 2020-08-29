<template>
  <div>
    <div v-if="main_show">
      <div v-for="(homepage, index) in allHomepage" :key="index">
        <transition name="fade">
          <div
            class="home__left flex flex-col z-10 mt-6 mx-auto h-full pb-12 lg:pb-0"
          >
            <div class="logo w-1/2 mx-auto xl:mx-0">
              <img
                src="~/static/logo/logo.svg"
                alt=""
                class="w-8/12 xl:w-full"
              />
            </div>
            <h1
              class="text-xl sm:text-2xl md:text-4xl mt-8 lg:mt-0 lg:text-6xl font-regular w-10/12 xl:w-1/2"
            >
              {{ homepage.title.fr }}
            </h1>
            <p
              class="text-base sm:text-xl md:text-3xl my-4 md:mt-8 w-11/12 lg:w-5/12"
            >
              {{ homepage.tagline.fr }}
            </p>
            <div class="home__cta mt-12">
              <Button type="primary" class="sm:mr-8" to="/projets"
                >Voir mon travail</Button
              >
              <Button type="secondary" to="/contact">Me contacter</Button>
            </div>
          </div>
        </transition>
        <transition type="transition" name="slide-fade">
          <div
            class="home__right absolute top-0 right-0 xl:w-1/2 w-full"
            v-if="image_show"
          >
            <img
              class="home__right__image"
              src="~/assets/img/home_bg_lg.jpg"
              alt="image de bureau"
            />
          </div>
        </transition>
      </div>
    </div>
    <div class="home__right__social w-full text-center">
      <a class="mx-5" href="https://twitter.com/NDX_dev" target="_blank">
        <img
          class="home__right__social__img"
          src="~/assets/img/twitter.svg"
          alt
        />
      </a>
      <a class="mx-5" href="https://codepen.io/NDX_dev" target="_blank">
        <img
          class="home__right__social__img"
          src="~/assets/img/codepen.svg"
          alt
        />
      </a>
      <a class="mx-5" href="https://github.com/NicolasD09" target="_blank">
        <img
          class="home__right__social__img"
          src="~/assets/img/github.svg"
          alt
        />
      </a>
      <a
        class="mx-5"
        href="https://www.linkedin.com/in/nicdx-dev/"
        target="_blank"
      >
        <img
          class="home__right__social__img"
          src="~/assets/img/linkedin.svg"
          alt
        />
      </a>
    </div>
  </div>
</template>

<script>
// import ConstructionModal from "@/components/ConstructionModal/ConstructionModal";
import Button from "@/components/Button/Button";
import { getHomepage } from "@/queries/queries.js";
export default {
  data() {
    return {
      image_show: false,
      main_show: false
    };
  },
  apollo: {
    allHomepage: {
      prefetch: true,
      query: getHomepage
    }
  },
  components: {
    // ConstructionModal,
    Button
  },
  mounted() {
    setTimeout(() => {
      this.main_show = true;
    }, 200);
    setTimeout(() => {
      this.image_show = true;
    }, 500);
  }
};
</script>

<style scoped>
* {
  z-index: 10;
}
.logo {
  height: fit-content;
  width: fit-content;
}

.home__wrapper {
  min-height: 80vh;
  padding-bottom: 50px;
}

.home__left {
  left: 10%;
  position: relative;
  order: 1;
  height: fit-content;
}

.home__right {
  z-index: 0;
  order: 0;
  border-bottom-left-radius: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.home__right__image {
  border-bottom-left-radius: 30px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(30%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 0.7s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.home__right__quote p:nth-child(1) {
  border-left: 3px solid var(--light-grey);
  padding-left: 0.5rem;
}

.home__right__social__img {
  height: 46px;
  display: inline-block;
}

.home__right__social a:hover {
  transform: translateY(-3px);
  filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.8));
}

/* RESPONSIVE */
@media (max-width: 640px) {
  .home__left {
    margin: 52% auto 0 auto;
  }
  .home__right {
    border-bottom-right-radius: 30px;
    margin-top: 0;
  }
}

@media (min-width: 1024px) {
  .home__right__social {
    position: absolute;
    left: 50%;
    transform: translateX(-25%);
    width: fit-content;
    bottom: 2em;
  }
}
@media (min-width: 640px) and (max-width: 1280px) {
  .home__right {
    border-bottom-right-radius: 30px;
    margin-top: -20%;
  }
  .home__right__image {
    border-bottom-right-radius: 30px;
  }
  .home__left {
    margin: 44% auto 0 auto;
  }
}

@media (max-width: 1280px) {
  .home__right__social {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    bottom: 0;
    margin-top: 3em;
    margin-bottom: 3em;
  }
}
</style>
