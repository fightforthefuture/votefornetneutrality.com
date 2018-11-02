<style lang="scss" scoped>
.selfies-wrapper {
  min-height: 470px;

  @include respond-to(med) {
    min-height: 720px;
  }

  @include respond-to(lrg) {
    min-height: 620px;
  }
}
</style>

<template>
  <div class="selfies-wrapper flex-row flex-center">
    <a class="arrow" @click.prevent="prev">
      <img src="~assets/images/arrow-left.svg" alt="Previous" class="grid-center"/>
    </a>
    <transition name="fade" mode="out-in">
      <div :key="`slide-${activeSlide}`">
        <img :src="selfies[activeSlide].imageUrl"
             :alt="`Voter: ${selfies[activeSlide].name}`"
             class="grid-center"/>
        <blockquote class="sml-push-y1">{{ selfies[activeSlide].comment }}</blockquote>
        <p>
          <a :href="selfies[activeSlide].twitterUrl" target="_blank">
            {{ selfies[activeSlide].name }}
            <span v-if="selfies[activeSlide].location">
              from {{ selfies[activeSlide].location }}
            </span>
          </a>
        </p>
      </div>
    </transition>
    <a class="arrow" @click.prevent="next">
      <img src="~assets/images/arrow-right.svg" alt="Next" class="grid-center"/>
    </a>
  </div> <!-- .selfies-wrapper -->
</template>

<script>
import selfies from '~/assets/data/selfies.json'

export default {
  computed: {
    selfies() { return selfies }
  },

  data () {
    return {
      activeSlide: 0
    }
  },

  methods: {
    next() {
      if (this.activeSlide < this.selfies.length - 1) {
        this.activeSlide++
      } else {
        this.activeSlide = 0
      }
    },

    prev() {
      if (this.activeSlide > 0) {
        this.activeSlide--
      } else {
        this.activeSlide = this.selfies.length - 1
      }
    }
  }
}
</script>
