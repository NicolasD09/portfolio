<template>
  <div>
    <ConstructionModal />
    <div
      class="sm:flex sm:flex-col xl:grid xl:grid-cols-2 xl:grid-rows-1 xl:items-start px-8 "
    >
      <transition name="fade">
        <div
          v-if="image_show"
          class="home__left flex flex-col z-10 mt-8 sm:mt-32"
        >
          <h1 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-regular">
            Pouvoir créer une identité numérique
            <br />n'a jamais été aussi simple
          </h1>
          <p class="text-base md:text-2xl my-4 md:mt-8">
            Je suis designer autodidacte et étudiant en ingénierie
            logicielle.<br />
            Je crée des logos, cartes de visites et sites internet modernes et
            ergonomiques.
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
          class="home__right mt-8 md:mt-0 gap-4 sm:gap-8 z-10"
          v-if="image_show"
        >
          <img
            class="home__right__image h-mobile lg:h-high md:h-med sm:h-small xl:h-xl"
            src="~/assets/img/programming_illustration.webp"
            alt="programming_image"
          />
          <div class="home__right__quote text-right">
            <p class="text-lg md:text-2xl lg:text-4xl">
              Le design est dans les détails
            </p>
            <p class="text-base md:text-lg lg:text-2xl">Paul Bennet</p>
          </div>
          <div class="home__right__social">
            <div class="flex flex-row">
              <a
                class="mx-5"
                href="https://twitter.com/NDX_dev"
                target="_blank"
              >
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
              <a
                class="mx-5"
                href="https://github.com/NicolasD09"
                target="_blank"
              >
                <img
                  class="h-8 md:h-12 home__right__social__img"
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
      <div v-if="main_show" class="home__circles bottom-0 left-0 fixed">
        <img src="~/assets/img/circles_corner.webp" alt />
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
.home__circles {
  z-index: 0;
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

.home__right {
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  justify-items: end;
  align-items: center;
}

.home__right__social div a:hover {
  transform: translateY(-3px);
  filter: drop-shadow(0 8px 15px rgba(0, 0, 0, 0.6));
}
</style>
