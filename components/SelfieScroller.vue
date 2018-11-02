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
        <img v-if="curSlide.imageUrl"
             :src="curSlide.imageUrl"
             :alt="`Voter: ${curSlide.name}`"
             class="grid-center"/>
        <blockquote class="sml-push-y1"
            v-text="curSlide.comment ? curSlide.comment : 'I\'m voting for Net Neutrality!'">
        </blockquote>
        <p v-if="curSlide.name">
          <a :href="curSlide.twitterUrl" target="_blank">
            {{ curSlide.name }}
            <span v-if="curSlide.location">
              from {{ curSlide.location }}
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
export default {
  computed: {
    selfies() {
      return this.$store.state.selfies
    },
    curSlide() { return this.selfies[this.activeSlideNum] }
  },

  data () {
    return {
      activeSlideNum: 0
    }
  },

  created() {
    this.$store.dispatch('getSelfies')
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
