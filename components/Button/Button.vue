<template>
  <div class="inline-block">
    <nuxt-link v-if="to" :to="to">
      <button :class="type" class="p-2" :disabled="disabled">
        <span class="text-base">
          <slot></slot>
        </span>
      </button>
    </nuxt-link>
    <button v-else :class="type" class="p-2" :disabled="disabled">
      <slot>
        <span class="text-base">
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
