<style lang="scss" scoped>
.selfies-wrapper {
  min-height: 560px;

  @include respond-to(med) {
    min-height: 785px;
  }

  @include respond-to(lrg) {
    min-height: 685px;
  }
}
</style>

<template>
  <div v-if="selfies" class="selfies-wrapper flex-row flex-center">
    <a class="arrow" @click.prevent="prev">
      <img src="~assets/images/arrow-left.svg" alt="Previous" class="grid-center"/>
    </a>
    <transition name="fade" mode="out-in">
      <div :key="`slide-${activeSlideNum}`">
        <SelfieFeature :selfie="curSlide"/>
      </div>
    </transition>
    <a class="arrow" @click.prevent="next">
      <img src="~assets/images/arrow-right.svg" alt="Next" class="grid-center"/>
    </a>
  </div> <!-- .selfies-wrapper -->
</template>

<script>
import SelfieFeature from '~/components/SelfieFeature'

export default {
  components: {
    SelfieFeature
  },

  computed: {
    selfies() {
      if (this.$store.state.selfies) {
        return this.$store.state.selfies.data
      }
    },
    curSlide() { return this.selfies[this.activeSlideNum] }
  },

  data () {
    return {
      activeSlideNum: 0
    }
  },

  created() {
    this.$store.dispatch('getSelfies', { page: 1 })
  },

  methods: {
    next() {
      if (this.activeSlideNum < this.selfies.length - 1) {
        this.activeSlideNum++
      } else {
        this.activeSlideNum = 0
      }
    },

    prev() {
      if (this.activeSlideNum > 0) {
        this.activeSlideNum--
      } else {
        this.activeSlideNum = this.selfies.length - 1
      }
    }
  }
}
</script>
