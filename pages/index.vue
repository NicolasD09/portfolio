<template>
  <div>
    <div v-if="main_show">
      <div v-for="(homepage, index) in allHomepage" :key="index">
        <transition name="fade">
          <div class="home__left flex flex-col z-10 mt-6 mx-auto h-full">
            <div class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="504"
                height="210"
                viewBox="0 0 504 210"
              >
                <defs>
                  <rect id="rect-1" width="504" height="210" x="0" y="0" />
                  <rect id="rect-2" width="504" height="210" x="0" y="0" />
                  <mask
                    id="mask-3"
                    maskContentUnits="userSpaceOnUse"
                    maskUnits="userSpaceOnUse"
                  >
                    <rect width="504" height="210" x="0" y="0" fill="black" />
                    <use fill="white" xlink:href="#rect-2" />
                  </mask>
                  <rect
                    id="rect-4"
                    width="503.96"
                    height="210.966"
                    x="0"
                    y="-.966"
                  />
                </defs>
                <g>
                  <use fill="none" xlink:href="#rect-2" />
                  <g mask="url(#mask-3)">
                    <path
                      fill="rgb(0,27,53)"
                      fill-rule="evenodd"
                      d="M55.64416415 209.89532982H0V.5192577h72.37667387l70.89140388 153.7137015V.51925771h55.64440605l23.32526998.04051351-.0399136-.04051351s49.64768898-1.48533144 77.14574513 12.67740598c26.17485961 13.47991842 63.39853132 52.92309041 63.39853132 52.92309041L426.81434125.5192577h77.14574514L401.65183585 105.2689876l102.18609072 104.62634222h-77.14574514l-49.43239741-50.6529789-14.51766739-14.87547978-.002419.00369424-75.5588769-77.388329c-.05805615-.05996985-.11732181-.11957028-.17537797-.17904757l-.00846652-.0092356c-9.58652268-9.7635113-23.0724838-15.62257859-38.51542116-15.62257859h-41.98185746v108.01186843l41.98185746.05910786c30.67542116 0 53.63300216-23.11979576 53.63300216-54.03542657 0-5.03599024-1.18047517-8.9914148-2.84958964-12.75855616-.31084233-.7393409-.06168466-1.59874466.59265659-2.04919586.65313175-.45057434 1.5300216-.36486793 2.0876026.20367586 16.92215982 17.19669496 56.82971921 57.82768879 56.82971921 57.82768879s-31.00198704 31.61408877-46.35663067 47.24073102C298.33969763 210 280.78738661 209.89532982 280.78738661 209.89532982h-53.9111879l-.04717063-.04925656-27.91654428.04925656h-91.12615119L55.64416415 96.8660655v113.02926432z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1
              class="text-xl sm:text-2xl md:text-4xl lg:text-6xl md:mt-8 font-regular w-1/2"
            >
              {{ homepage.title.fr }}
            </h1>
            <p class="text-base md:text-3xl my-4 md:mt-8 w-5/12">
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
            class="home__right absolute top-0 right-0 w-7/12"
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
.logo,
.logo svg {
  height: 210px;
  width: 504px;
}
.logo path {
  fill: var(--bg-logo);
}
.home__wrapper {
  min-height: 80vh;
  padding-bottom: 50px;
}

.home__left {
  left: 10%;
  position: relative;
}

.home__right {
  z-index: 0;
  left: 50%;
}

.home__right__image {
  border-bottom-left-radius: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
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

.home__right__social {
  position: absolute;
  margin: 0 auto;
  padding-bottom: 1em;
  bottom: 1em;
}
</style>
