<template>
  <div>
    <div v-if="selfies && selfies.data.length === 0">
      <h4 class="text-center sml-push-y2 med-push-y4">
        Sorry, we didn&rsquo;t find any selfies that match your search
      </h4>
    </div>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['selfies', 'selfiesCurPageNum']),

    isEndOfFeed() {
      if (this.$store.state.selfies) {
        return this.selfiesCurPageNum >= this.$store.state.selfies.pages.page_count
      }
    }
  },

  mounted() {
    // NOTE: selfies are fetched in the `PageHeader`

    // `window` is not availabled in `created` lifecycle hook
    window.addEventListener('scroll', () => {
      this.bottomVisible()
    })
  },

  methods: {
    loadMore() {
      if (!this.isEndOfFeed) {
        this.$store.commit('setSelfiesCurPageNum', this.selfiesCurPageNum + 1)
        this.$store.dispatch('getSelfies', { page: this.selfiesCurPageNum })
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
