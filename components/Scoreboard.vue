<template>
  <div>
    <section id="scoreboard" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>See where the canidates stand</h2>
            <p class="sml-push-y2 med-push-y3">
              Enter your address below. We&rsquo;ll provide you with a list of
              all the candidates running for the Senate and House in your
              district, and show you where they stand on restoring net
              neutrality. Then we&rsquo;ll show you the most important things
              you can do to make sure the free and open Internet wins in 2018.
            </p>

            <form class="flex-row sml-push-y2 med-push-y3"
                  @submit.prevent="fetchCandidates">
              <input type="text"
                     v-model="address"
                     class="sml-flex-2 med-flex-3"
                     placeholder="Street Address, City, State ZIP"
                     ref="addressInput" />
              <button class="btn" :disabled="isLoading">
                Let&rsquo;s go
              </button>
            </form>
          </div> <!-- .c -->
        </div> <!-- .row -->

        <div class="row">
          <div class="sml-c12 lrg-c9 grid-center">
            <section v-if="results"
                     id="results"
                     class="sml-pad-2 med-pad-4 sml-push-y4 fill-brand-darkest is-rounded">
              <h2 class="text-center text-white">
                Here&rsquo;s where candidates in your area stand on Net
                Neutrality
              </h2>

              <Candidates :race="results.senate" />
              <Candidates :race="results.house" />
            </section>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="key-races" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Help out in these key races</h2>
            <p class="sml-push-y2 med-push-y3">
              We&rsquo;ve identified 22 extremely close races across the country
              where net neutrality supporters can make a difference. Click on
              the links below to help out.
            </p>
          </div> <!-- .c -->
        </div> <!-- .row -->

        <div class="row">
          <div class="sml-c12 lrg-c9 grid-center">
            <section v-if="keyRaces"
                     class="sml-pad-2 med-pad-4 sml-push-y4 fill-brand-darkest is-rounded">
              <Candidates
                v-for="(race, index) in keyRaces.senate"
                :key="`key-senate-race-${index}`"
                :race="race" />
              <Candidates
                v-for="(race, index) in keyRaces.house"
                :key="`key-house-race-${index}`"
                :race="race" />
            </section>
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
      results: null,
      keyRaces: null
    }
  },

  mounted() {
    this.autocompleteAddress()
    this.fetchKeyRaces()
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
    },

    async fetchKeyRaces(){
      try {
        const { data } = await axios.get('https://data.battleforthenet.com/vfnn/scoreboard/important.json')
        this.keyRaces = data
      }
      catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
