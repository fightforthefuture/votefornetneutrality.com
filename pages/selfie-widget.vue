<style lang="scss">
html,
body {
  background: transparent;
}
</style>

<template>
  <SelfieScroller class="text-center"/>
</template>

<script>
import SelfieScroller from '~/components/SelfieScroller'

export default {
  layout: 'skeleton',

  components: {
    SelfieScroller
  }
}
</script>
