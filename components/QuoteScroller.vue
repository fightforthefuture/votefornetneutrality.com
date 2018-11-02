<style lang="scss" scoped>
.quotes-wrapper {
  min-height: 300px;

  @include respond-to(med) {
    min-height: 281px;
  }

  @include respond-to(lrg) {
    min-height: 217px;
  }
}

</style>

<template>
  <div class="quotes-wrapper flex-row flex-center">
    <a class="arrow" @click.prevent="prev">
      <img src="~assets/images/arrow-left.svg" alt="Previous" class="grid-center"/>
    </a>
    <transition name="fade" mode="out-in">
      <div :key="`slide-${activeSlide}`">
        <blockquote>{{ quotes[activeSlide].text }}</blockquote>
        <p class="text-brand">{{ quotes[activeSlide].source }}</p>
      </div>
    </transition>
    <a class="arrow" @click.prevent="next">
      <img src="~assets/images/arrow-right.svg" alt="Next" class="grid-center"/>
    </a>
  </div> <!-- .quotes-wrapper -->
</template>

<script>
import quotes from '~/assets/data/quotes.json'

export default {
  computed: {
    quotes() { return quotes }
  },

  data () {
    return {
      activeSlide: 0
    }
  },

  methods: {
    next() {
      if (this.activeSlide < this.quotes.length - 1) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
    },

    prev() {
      if (this.activeSlide > 0) {
        this.activeSlide--
      } else {
        this.activeSlide = this.quotes.length - 1
      }
    }
  }
}
</script>
