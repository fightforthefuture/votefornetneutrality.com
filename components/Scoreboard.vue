<template>
  <div>
    <section id="scoreboard" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>See where the canidates stand</h2>
            <p class="sml-push-y2 med-push-y3">
              We&rsquo;re keeping track of who supports net neutrality&hellip;
              and who doesn&rsquo;t.
            </p>

            <form class="flex-row sml-push-y2 med-push-y3"
                  @submit.prevent="fetchCandidates">
              <input type="text"
                     v-model="address"
                     class="sml-flex-2 med-flex-3"
                     placeholder="Street Address, City, State ZIP"
                     ref="addressInput" />
              <button class="btn" :disabled="isLoading">
                Search
              </button>
            </form>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section v-if="results"
             id="results"
             class="sml-pad-y2 med-pad-y4 fill-brand-dark-color">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Results</h2>

            <Candidates :race="results.senate" title="Senate" />
            <Candidates :race="results.house" title="House" />
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="key-races" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Key Races</h2>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import Candidates from '~/components/Candidates'

export default {
  components: {
    Candidates
  },

  data () {
    return {
      isLoading: false,
      address: null,
      results: null
    }
  },

  mounted() {
    this.autocompleteAddress();
  },

  methods: {
    autocompleteAddress() {
      let self = this
      const autocomplete = new google.maps.places.Autocomplete(this.$refs.addressInput)
      autocomplete.setTypes(['address'])
      autocomplete.setComponentRestrictions({'country': ['us', 'pr', 'vi', 'gu', 'mp']})

      autocomplete.addListener('place_changed', function() {
        let place = autocomplete.getPlace()

        if (place.formatted_address) {
          self.address = place.formatted_address
        }
      })
    },

    async fetchCandidates() {
      this.results = null
      this.isLoading = true
      const { data } = await axios.get(`https://vfnn-scoreboard-api.fftf.xyz/?address=${this.address}`)
      this.results = data
      this.isLoading = false
    }
  }
}
</script>
