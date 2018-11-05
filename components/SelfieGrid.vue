<template>
  <div v-if="selfies">
    <div class="row sml-push-y1 med-push-y2">
      <div v-for="(selfie, index) in selfies"
           :key="`selfies-${index}`"
           class="sml-c3 lrg-c2 sml-push-y2">
        <img :src="selfie.imageUrl" :alt="`Selfie ${index}`" />
      </div> <!-- v-for -->
    </div> <!-- .row -->

    <div class="sml-push-y2 text-center">
      <a v-if="!isEndOfFeed" @click="loadMore" class="btn">Load More</a>
      <p v-else class="text-brand-light">
        You&rsquo;ve reached the end of the feed
      </p>
    </div> <!-- .push -->
  </div> <!-- v-if -->
</template>

<script>
export default {
  computed: {
    selfies() {
      if (this.$store.state.selfies) {
        return this.$store.state.selfies.slice(0, this.curPageNum*this.perPageNum)
      }
    },
    isEndOfFeed() {
      return this.curPageNum*this.perPageNum >= this.$store.state.selfies.length
    }
  },

  data () {
    return {
      perPageNum: 24,
      curPageNum: 1
    }
  },

  mounted() {
    this.$store.dispatch('getSelfies')

    // `window` is not availabled in `created` lifecycle hook
    window.addEventListener('scroll', () => {
      this.bottomVisible()
    })
  },

  methods: {
    loadMore() {
      this.curPageNum++
    },
    bottomVisible() {
      const doc = document.documentElement
      let isBottomOfPage = doc.clientHeight + window.scrollY >= doc.scrollHeight
      console.log('isBottomOfPage:', isBottomOfPage)
      if (isBottomOfPage) {
        console.log('load more now...')
        this.loadMore()
      }
    }
  }
}
</script>
