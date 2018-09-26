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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="quotes-wrapper flex-row flex-center">
    <a @click.prevent="prev">&lt;</a>
    <transition name="fade" mode="out-in">
      <div class="sml-flex-8" :key="`slide-${activeSlide}`">
        <blockquote>{{ quotes[activeSlide].text }}</blockquote>
        <p class="text-brand">{{ quotes[activeSlide].source }}</p>
      </div>
    </transition>
    <a @click.prevent="next">&gt;</a>
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
