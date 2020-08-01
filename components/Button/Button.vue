<template>
  <div class="inline-block">
    <nuxt-link v-if="to" :to="to">
      <button :class="type" class="p-2">
        <span class="text-base">
          <slot></slot>
        </span>
      </button>
    </nuxt-link>
    <button v-else :class="type">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ["type", "to"],
};
</script>

<style src="./Button.css">
</style>