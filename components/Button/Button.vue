<template>
  <div class="inline-block">
    <nuxt-link v-if="to" :to="to">
      <button
        :class="type"
        class="py-2 px-3 md:py-3 md:px-4"
        :disabled="disabled"
      >
        <span class="text-base md:text-lg">
          <slot></slot>
        </span>
      </button>
    </nuxt-link>
    <button
      v-else
      :class="type"
      class="py-2 px-3 md:py-3 md:px-4"
      :disabled="disabled"
    >
      <slot>
        <span class="text-base md:text-lg">
          <slot></slot>
        </span>
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ["type", "to", "disabled"]
};
</script>

<style src="./Button.css"></style>
