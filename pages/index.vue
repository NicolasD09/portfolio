<template>
  <div>
    <ConstructionModal />
    <div class="grid md:grid-cols-2 px-8">
      <transition name="fade">
        <div v-if="image_show" class="home__left flex flex-col justify-center">
          <h1 class="text-5xl font-regular">
            Pouvoir créer une identité visuelle
            <br />n'a jamais été aussi simple
          </h1>
          <p class="text-2xl my-8">
            Vous souhaitez développer votre image numérique ? Je propose des
            <br />services de création de sites internet, mais également de logos et visuels
            <br />graphiques.
          </p>
          <div class="home__cta">
            <Button type="primary" class="mr-8" to="/projets">Voir mon travail</Button>
            <Button type="secondary" to="/contact">Me contacter</Button>
          </div>
        </div>
      </transition>
      <transition type="transition" name="slide-fade">
        <div class="home__right gap-8" v-if="image_show">
          <img
            class="home__right__image h-mobile lg:h-high md:h-med sm:h-small xl:h-xl"
            src="~/assets/img/programming_illustration.png"
            alt="programming_image"
          />
          <div class="home__right__quote text-right">
            <p class="text-4xl">Le design est dans les détails</p>
            <p class="text-2xl">Paul Bennet</p>
          </div>
          <div class="home__right__social">
            <div class="flex flex-row">
              <a href="#">
                <img
                  class="md:h-12 px-5 home__right__social__img"
                  src="~/assets/img/twitter.svg"
                  alt
                />
              </a>
              <a href="#">
                <img
                  class="md:h-12 px-5 home__right__social__img"
                  src="~/assets/img/codepen.svg"
                  alt
                />
              </a>
              <a href="#">
                <img
                  class="md:h-12 px-5 home__right__social__img"
                  src="~/assets/img/github.svg"
                  alt
                />
              </a>
              <a href="#">
                <img
                  class="md:h-12 px-5 home__right__social__img"
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
    <div v-if="main_show" class="home__circles bottom-0 left-0 absolute z-1">
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
      main_show: false
    };
  },
  components: {
    ConstructionModal,
    Button,
  },
  mounted() {
    setTimeout(() => {
      this.main_show = true;
    }, 400);
    setTimeout(() => {
      this.image_show = true;
    }, 900);
  },
};
</script>

<style src="./index/Index.css">
</style>
