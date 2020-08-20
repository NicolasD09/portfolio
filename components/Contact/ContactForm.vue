<template>
  <div class="grid grid-cols-2 grid-rows-1">
    <div class="mx-auto">
      <h1 class="text-5xl">Contactez-moi !</h1>
      <div class="flex flex-row items-center mt-16">
        <p class="text-xl">
          Je suis également actif sur Twitter :
        </p>
        <a class="mx-5" href="https://twitter.com/NDX_dev" target="_blank">
          <img class="h-8 md:h-12" src="~/assets/img/twitter.svg" alt />
        </a>
      </div>
      <div class="mt-16">
        <p class="text-xl">Sinon, envoyez-moi un mail directement :</p>
        <Button type="primary">
          <span>
            Voir mon e-mail
          </span>
        </Button>
      </div>
    </div>
    <div class="form-container">
      <form class="w-10/12 py-16 h-full  flex flex-col justify-around">
        <div class="w-9/12 mx-auto flex flex-row justify-between mb-16">
          <div class="w-5/12 flex flex-col">
            <input type="text" class="border-b-2 bg-transparent" />
            <label class="font-regular text-lg" for="surname">Nom</label>
          </div>
          <div class="w-5/12 flex flex-col">
            <input type="text" class="border-b-2 bg-transparent" />
            <label class="font-regular text-lg" for="name">Prénom</label>
          </div>
        </div>
        <div class="w-9/12 mx-auto mb-16">
          <div class="flex flex-col">
            <input type="text" class="border-b-2 bg-transparent" />
            <label class="font-regular text-lg" for="subject">Objet</label>
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
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button";
export default {};
</script>

<style scoped>
form {
  border-top: 8px solid var(--light-blue);
  background-color: var(--form-bg);
}

input,
textarea {
  border-color: var(--links-color);
}

*:focus {
  outline: none;
  border-color: var(--light-blue);
  transition: all 0.3s linear;
}

input:focus + label,
textarea:focus + label {
  transform: translateY(-25px);
  transition: all 0.3s linear;
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
  height: 70vh;
}
</style>
