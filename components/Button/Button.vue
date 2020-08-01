<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style src="./Button.css">
</style>