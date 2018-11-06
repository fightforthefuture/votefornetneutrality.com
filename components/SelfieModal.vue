<style lang="scss">
  .modal{
    max-width: 400px;
  }
</style>

<template>
  <div v-if="selfie" class="text-center">
    <SelfieFeature :selfie="selfie"/>
  </div> <!-- v-if -->
</template>

<script>
import SelfieFeature from '~/components/SelfieFeature'

export default {
  components: {
    SelfieFeature
  },

  props: {
    selfie: {
      type: Object,
      required: true
    }
  }
}
</script>
