<template>
  <div class="w-full md:w-10/12 mx-auto">
    <div
      class="flex flex-col items-center xl:grid xl:grid-cols-2 xl:grid-rows-1"
    >
      <div class="mx-auto xl:w-6/12">
        <!-- <h1 class="text-5xl">Contactez-moi !</h1> -->
        <div class="flex flex-col items-center justify-between mt-12">
          <span class="text-xl md:text-2xl mb-6">
            Je suis également actif sur Twitter :
          </span>
          <a class="mx-5" href="https://twitter.com/NDX_dev" target="_blank">
            <img class="h-12" src="~/assets/img/twitter.svg" alt />
          </a>
        </div>
        <div class="flex flex-col items-center justify-between mt-12">
          <span class="text-xl md:text-2xl mb-6"
            >Sinon, envoyez-moi un mail :</span
          >
          <span @click="revealEmail">
            <Button type="secondary">
              <span>
                Voir mon e-mail
              </span>
            </Button>
          </span>
          <transition name="link-fade">
            <span v-if="email" class="text-2xl mt-32 tracking-wider absolute"
              >nidcx.dev<span class="text-3xl font-medium">@</span
              >gmail.com</span
            >
          </transition>
        </div>
      </div>
      <div
        class="form-container flex p-6 mb-10 xl:mb-0 mt-16 xl:mt-0 items-center w-full"
      >
        <form
          class="w-11/12 py-12 h-full flex flex-col justify-around mx-auto"
          @submit.prevent="sendMail"
        >
          <div
            class="w-9/12 mx-auto flex flex-col md:flex-row justify-between md:mb-16"
          >
            <div class="md:w-5/12 w-full flex flex-col mb-10 lg:mb-0">
              <input
                type="text"
                class="border-b-2 bg-transparent"
                name="surname"
              />
              <label class="font-regular text-lg" for="surname">Nom</label>
            </div>
            <div class="md:w-5/12 w-full flex flex-col mb-10 lg:mb-0">
              <input
                type="text"
                class="border-b-2 bg-transparent"
                name="name"
              />
              <label class="font-regular text-lg" for="name">Prénom</label>
            </div>
          </div>
          <div class="w-9/12 mx-auto mb-16">
            <div class="flex flex-col">
              <input
                type="text"
                name="objet"
                class="border-b-2 bg-transparent"
              />
              <label class="font-regular text-lg" for="subject" name="objet"
                >Objet</label
              >
            </div>
          </div>
          <div class="w-9/12 mx-auto">
            <div class="flex flex-col">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                class="border-b-2 bg-transparent"
              ></textarea>
              <label class="font-regular text-lg" for="message">Message</label>
            </div>
            <Button
              type="primary"
              class="mt-8"
              disabled
              title="Le formulaire n'est pas encore fonctionnel"
            >
              <span>
                Envoyer
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {
  data() {
    return {
      email: false,
      surname: "",
      name: "",
      objet: "",
      message: ""
    };
  },
  methods: {
    revealEmail() {
      this.email = !this.email;
    },
    sendMail() {
      console.log("mail sent");
    }
  }
};
</script>

<style scoped>
input,
textarea {
  border-bottom: 2px solid var(--links-color);
  padding: 5px;
}

input:focus,
textarea:focus {
  outline: none;
  /* border-bottom: 2px solid var(--light-blue); */
  transition: all 0.5s ease-in-out;
  border: 2px solid var(--light-blue);
  border-radius: 5px;
}

input:focus + label,
textarea:focus + label {
  transform: translateY(-30px);
  transition: all 0.4s cubic-bezier(0.72, 0.16, 0.36, 1.58);
}

input,
textarea {
  order: 1;
}
label {
  order: 0;
  position: absolute;
}

.form-container {
  min-height: 70vh;
}

/* Page transitions */
.link-fade-enter-active,
.link-fade-leave-active {
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 0.4s;
}
.link-fade-enter,
.link-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0);
}
</style>
