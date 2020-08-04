<template>
  <div>
    <ConstructionModal />
    <div class="sm:flex sm:flex-col md:grid md:grid-cols-2 md:grid-rows-1 px-8">
      <transition name="fade">
        <div v-if="image_show" class="home__left flex flex-col justify-center">
          <h1 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-regular">
            Pouvoir créer une identité visuelle
            <br />n'a jamais été aussi simple
          </h1>
          <p class="text-base md:text-2xl my-4 md:my-8">
            Vous souhaitez développer votre image numérique ? Je propose des
            <br />services de création de sites internet, mais également de logos et visuels
            <br />graphiques.
          </p>
          <div class="home__cta">
            <Button type="primary" class="sm:mr-8" to="/projets">Voir mon travail</Button>
            <Button type="secondary" to="/contact">Me contacter</Button>
          </div>
        </div>
      </transition>
      <transition type="transition" name="slide-fade">
        <div class="home__right mt-8 md:mt-0 gap-4 sm:gap-8" v-if="image_show">
          <img
            class="home__right__image h-mobile lg:h-high md:h-med sm:h-small xl:h-xl"
            src="~/assets/img/programming_illustration.png"
            alt="programming_image"
          />
          <div class="home__right__quote text-right">
            <p class="text-lg md:text-4xl">Le design est dans les détails</p>
            <p class="text-base md:text-2xl">Paul Bennet</p>
          </div>
          <div class="home__right__social">
            <div class="flex flex-row">
              <a class="mx-5" href="https://twitter.com/NDX_dev" target="_blank">
                <img
                  class="h-8 md:h-12 home__right__social__img"
                  src="~/assets/img/twitter.svg"
                  alt
                />
              </a>
              <a class="mx-5" href="https://codepen.io/NDX_dev" target="_blank">
                <img
                  class="h-8 md:h-12 home__right__social__img"
                  src="~/assets/img/codepen.svg"
                  alt
                />
              </a>
              <a class="mx-5" href="https://github.com/NicolasD09" target="_blank">
                <img
                  class="h-8 md:h-12 home__right__social__img"
                  src="~/assets/img/github.svg"
                  alt
                />
              </a>
              <a class="mx-5" href="https://www.linkedin.com/in/nicdx-dev/" target="_blank">
                <img
                  class="h-8 md:h-12 home__right__social__img"
                  src="~/assets/img/linkedin.svg"
                  alt
                />
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fade">
      <div v-if="main_show" class="home__circles bottom-0 left-0 fixed z-1">
        <img src="~/assets/img/circles_corner.png" alt />
      </div>
    </transition>
  </div>
</template>

<script>
import ConstructionModal from "@/components/ConstructionModal/ConstructionModal";
import Button from "@/components/Button/Button";

export default {
  data() {
    return {
      image_show: false,
      main_show: false,
    };
  },
  components: {
    ConstructionModal,
    Button,
  },
  mounted() {
    setTimeout(() => {
      this.main_show = true;
    }, 200);
    setTimeout(() => {
      this.image_show = true;
    }, 1000);
  },
};
</script>

<style src="./index/Index.css">
</style>
