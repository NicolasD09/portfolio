<template>
  <div>
    <transition duration="500" type="transition" name="fade">
      <div class="absolute z-50 sm:w-8/12 md:w-5/12 lg:w-4/12" id="modal_container" v-if="toggleModal" v-hotkey="keymap">
        <div class="relative mx-auto w-auto">
          <div class="bg-white w-auto mx-auto px-4 sm:px-8 md:px-12 pb-6 rounded-lg relative">
            <div class="flex flex-row justify-end">
              <span class="text-red-700 cursor-pointer text-6xl" @click="closeModal">&times;</span>
            </div>
            <h1 class="text-2xl sm:text-4xl md:text-5xl">Bienvenue !</h1>
            <p class="text-base sm:text-xl md:text-2xl">Le site est en cours de construction !</p>
            <p class="text-base sm:text-xl md:text-2xl">Merci pour votre patience !</p>
            <hr class="border-black my-4" />
            <h1 class="text-2xl sm:text-4xl md:text-5xl">Welcome !</h1>
            <p class="text-base sm:text-xl md:text-2xl">The website is still under construction !</p>
            <p class="text-base sm:text-xl md:text-2xl">Thanks for your patience !</p>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="absolute inset-0 z-40 opacity-25 bg-black"
      v-if="toggleModal"
      @click.self="closeModal"
    ></div>
  </div>
</template>

<script>
import { store } from "@/store/index.js";
import Vue from "vue";
import VueHotkey from "v-hotkey";
Vue.use(VueHotkey);

export default {
  data() {
    return {
      toggleModal: false,
    };
  },
  methods: {
    closeModal() {
      this.toggleModal = false;
    },
  },
  mounted() {
    if (!this.showed) {
      setTimeout(() => {
        this.toggleModal = true;
      }, 1000);
    }
    store.commit("showModal");
  },
  computed: {
    showed: {
      get: function () {
        return store.state.modalShowedOnce;
      },
    },
    keymap() {
      return {
        esc: {
          keyup: this.closeModal,
        },
      };
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#modal_container{
  left: 50%;
  transform: translateX(-50%);
}
</style>