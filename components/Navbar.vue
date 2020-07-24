<template>
  <header class="flex justify-between m-5 mb-0 h-32">
    <nuxt-link
      tag="img"
      :src="require('~/assets/img/logo/logo.svg')"
      to="/"
      class="h-24 cursor-pointer"
    ></nuxt-link>
    <div>
      <nuxt-link class="mx-4" to="/">
        <span class="text-xl">Accueil</span>
      </nuxt-link>

      <nuxt-link class="mx-4" to="/projets">
        <span class="text-xl">Projets</span>
      </nuxt-link>

      <nuxt-link class="mx-4" to="/experiences">
        <span class="text-xl">Expériences</span>
      </nuxt-link>

      <nuxt-link class="mx-4" to="/about">
        <span class="text-xl">A propos</span>
      </nuxt-link>

      <nuxt-link class="mx-4" to="/contact">
        <span class="text-xl">Contact</span>
      </nuxt-link>
    </div>
    <button
      type="button"
      class="block text-gray-500 hover:text-white focus:text-white focus:outline-none sm:hidden"
    >
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
    </button>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>