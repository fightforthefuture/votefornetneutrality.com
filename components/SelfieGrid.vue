<template>
  <div v-if="selfies">
    <div class="row sml-push-y1 med-push-y2">
      <div v-for="(selfie, index) in selfies.data"
           :key="`selfies-${index}`"
           class="sml-c6 med-c3 lrg-c2 sml-push-y2">
        <div class="selfie-wrapper"
             :class="{'has-quote': selfie.comment}"
             v-on="selfie.comment ? { click: () => openModal(selfie) } : {}">
          <img :src="selfie.photo" :alt="`Selfie ${index}`" />
          <div v-if="selfie.first_time_voter"
               class="is-first-time-voter">
            1st Time<span class="med-hide"> Voter</span>
          </div> <!-- .is-first-time-voter -->
        </div> <!-- .selfie-wrapper -->
      </div> <!-- v-for -->
    </div> <!-- .row -->

    <div class="sml-push-y2 text-center">
      <a v-if="!isEndOfFeed" @click="loadMore" class="btn">Load More</a>
      <p v-else class="text-brand-light">
        You&rsquo;ve reached the end of the feed, but there are still millions
        more people fighting for Net Neutrality across the country.
      </p>
    </div> <!-- .push -->
  </div> <!-- v-if -->
</template>

<script>
export default {
  computed: {
    selfies() {
      if (this.$store.state.selfies) {
        return this.$store.state.selfies
      }
    },
    isEndOfFeed() {
      return this.curPageNum >= this.$store.state.selfies.pages.page_count
    }
  },

  data () {
    return {
      curPageNum: 1
    }
  },

  mounted() {
    this.$store.dispatch('getSelfies', this.curPageNum)

    // `window` is not availabled in `created` lifecycle hook
    window.addEventListener('scroll', () => {
      this.bottomVisible()
    })
  },

  methods: {
    loadMore() {
      if (!this.isEndOfFeed) {
        this.curPageNum++
        this.$store.dispatch('getSelfies', this.curPageNum)
      }
    },

    bottomVisible() {
      const doc = document.documentElement
      let isBottomOfPage = doc.clientHeight + window.scrollY >= doc.scrollHeight
      if (isBottomOfPage) {
        this.loadMore()
      }
    },

    openModal(selfie) {
      this.$store.commit('setModalVisibility', true)
      this.$store.commit('setModalType', 'selfie')
      this.$store.commit('setModalData', selfie)
    }
  }
}
</script>
