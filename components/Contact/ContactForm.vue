<template>
  <div class="w-full md:w-10/12 mx-auto my-auto">
    <div
      class="flex flex-col items-center xl:grid xl:grid-cols-2 xl:grid-rows-1"
    >
      <div class="w-1/4 h-20 rounded-lg error_message">
        <p>Tous les champs doivent être remplis</p>
      </div>
      <div class="w-1/4 h-20 rounded-lg email_sent">
        <p>Votre message a bien été envoyé !</p>
      </div>
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
          @submit.prevent="submitForm"
        >
          <div
            class="w-9/12 mx-auto flex flex-col md:flex-row justify-between md:mb-16"
          >
            <div class="md:w-5/12 w-full flex flex-col mb-10 lg:mb-0">
              <input
                type="text"
                class="border-b-2 bg-transparent"
                name="surname"
                v-model="surname"
              />
              <label class="font-regular text-lg" for="surname">Nom</label>
            </div>
            <div class="md:w-5/12 w-full flex flex-col mb-10 lg:mb-0">
              <input
                type="text"
                class="border-b-2 bg-transparent"
                name="name"
                v-model="name"
              />
              <label class="font-regular text-lg" for="name">Prénom</label>
            </div>
          </div>
          <div class="w-9/12 mx-auto mb-16">
            <div class="flex flex-col">
              <input
                type="text"
                name="object"
                class="border-b-2 bg-transparent"
                v-model="objet"
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
                v-model="message"
              ></textarea>
              <label class="font-regular text-lg" for="message">Message</label>
              <input
                type="checkbox"
                name="_honeypot"
                tabindex="-1"
                autocomplete="off"
                class="honeypot"
                style="display:none"
              />
            </div>
            <button type="submit">
              <Button type="primary" class="mt-8">
                <span>
                  Envoyer
                </span>
              </Button>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
// import axios from "@nuxtjs/axios";

export default {
  data() {
    return {
      errorMessage: false,
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
    errorEmail() {
      console.log("error email");
      const popup = document.querySelector(".error_message");
      popup.classList.toggle("active");
      setTimeout(() => {
        popup.classList.toggle("active");
        this.errorMessage = false;
      }, 3000);
    },
    async submitForm() {
      const honeypot = document.querySelector(".honeypot");
      if (
        this.name == "" ||
        this.surname == "" ||
        this.objet == "" ||
        this.message == "" ||
        honeypot.checked
      ) {
        this.errorEmail();
      } else if (!honeypot.checked) {
        await this.$axios
          .post("https://submit-form.com/Y2NqDlxV_eA1jO7NOsn-P", {
            surname: this.surname,
            name: this.name,
            object: this.objet,
            message: this.message
          })
          .then(res => {
            this.name = "";
            this.surname = "";
            this.objet = "";
            this.message = "";
            const popup = document.querySelector(".email_sent");
            popup.classList.toggle("active");
            setTimeout(() => {
              popup.classList.toggle("active");
            }, 3000);
          })
          .catch(res => console.error(res));
      }
    }
  }
};
</script>

<style scoped>
.error_message {
  position: absolute;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  border: 2px solid firebrick;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 999;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease-in-out;
  opacity: 0;
}

.error_message.active,
.email_sent.active {
  opacity: 1;
}
.email_sent {
  position: absolute;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 999;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease-in-out;
  opacity: 0;
}

input,
textarea {
  border-bottom: 2px solid var(--links-color);
  padding: 5px;
}

input:focus,
textarea:focus {
  outline: none;
  /* border-bottom: 2px solid var(--light-blue); */
  transition: all 0.1s linear;
  border: 2px solid var(--light-blue);
  border-radius: 5px;
}

input + label,
textarea + label {
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
