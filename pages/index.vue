<template>
  <div>
    <h1 class="text-6xl">Homepage</h1>


    <ConstructionModal/>
  </div>
</template>

<script>
import ConstructionModal from '@/components/ConstructionModal/ConstructionModal'

export default {
  components: {
    ConstructionModal
  }
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
