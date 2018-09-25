<template>
  <div>
    <section id="scoreboard" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>See where the candidates stand</h2>
            <p class="sml-push-y2 med-push-y3">
              Enter your address below. We&rsquo;ll provide you with a list of
              all the candidates running for the Senate and House in your
              district, and show you where they stand on restoring net
              neutrality. Then we&rsquo;ll show you the most important things
              you can do to make sure the free and open Internet wins in 2018.
            </p>

            <p class="text-warn" v-if="errorMessage">{{ errorMessage }}</p>

            <form class="flex-row sml-push-y2 med-push-y3"
                  @submit.prevent="fetchCandidates">
              <input type="text"
                     v-model="address"
                     class="sml-flex-2 med-flex-3"
                     placeholder="Street Address, City, State ZIP"
                     ref="addressInput"
                     required />
              <button class="btn btn-lrg" :disabled="isLoading">
                <span v-if="isLoading">Loading...</span>
                <span v-else>Let&rsquo;s go</span>
              </button>
            </form>
            <p class="sml-push-y1 text-center">
              <small> Data from Fight for the Future and Common Cause’s <a href="https://democracy2018.org/" target="_blank">Our Democracy 2018</a>.</small>
            </p>
          </div> <!-- .c -->
        </div> <!-- .row -->

        <div class="row" v-if="results">
          <div class="sml-c12 lrg-c9 grid-center">
            <section id="results"
                     class="sml-pad-2 med-pad-4 sml-push-y4 fill-black is-rounded">
              <div v-if="results.target">
                <h3 class="text-center text-warn">
                  Your {{ results.target.title }} opposes Net Neutrality and
                  they&rsquo;re facing a tight election
                </h3>

                <div class="with-border-warn is-rounded sml-push-y2 sml-pad-2">
                  <div class="row">
                    <div class="sml-c12 lrg-c4">
                      <div class="candidate-photo vote-no grid-center">
                        <img :src="results.target.photo" :alt="results.target.name">
                      </div> <!-- .target-photo -->
                    </div> <!-- .c -->
                    <div class="sml-c12 lrg-c8 sml-push-y2 lrg-push-y0">
                      <p>
                        Your current member of Congress,
                        {{ results.target.name }} took
                        {{ results.target.cable_contributions }} in
                        &ldquo;campaign donations&rdquo; from big ISPs and
                        refuses to support a resolution to restore net
                        neutrality. Tell them to get on the right side of
                        history or face the consequences. Then share this so
                        everyone in your area knows where the candidates stand
                        on the free and open Internet when they head to the
                        polls.
                      </p>
                      <div class="row med-pad-y1">
                        <div class="sml-c12 sml-pad-y1 med-c6 med-pad-y0">
                          <a @click="openModal('call')"
                             class="btn btn-block btn-success">
                            Call
                          </a>
                        </div> <!-- .c -->
                        <div class="sml-c12 med-c6">
                          <a @click="openModal('write')"
                             class="btn btn-block btn-brand">
                            Write
                          </a>
                        </div> <!-- .c -->
                      </div> <!-- .row -->
                    </div> <!-- .c -->
                  </div> <!-- .row -->
                </div> <!-- .with-border-warn -->

                <div class="sml-pad-y2 grid-center">
                  <SocialShareButtons />
                </div> <!-- .pad -->
                <div class="sml-push-y4"></div>
              </div> <!-- v-if -->

              <h2 class="text-center text-white">
                Here&rsquo;s where candidates in your area stand on Net
                Neutrality
              </h2>
              <p class="sml-push-y2 med-push-y3">
              Say "Thank you!" to those who support net neutrality.  And tell opponents and
              undecideds that you demand stronger net neutrality protections from your elected
              representatives.
              </p>
              <Candidates :race="results.house" key="local-house" />
              <Candidates :race="results.senate" key="local-senate" />
            </section>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <section id="key-races" class="sml-pad-y2">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c9 grid-center">
            <section v-if="keyRaces"
                     class="sml-pad-2 med-pad-4 sml-push-y4 fill-black is-rounded">

              <div class="text-center">
                <h2 class="lrg-pad-x4">Help out in these key races</h2>
                <p class="sml-push-y2 med-push-y3">
                 We&rsquo;ve identified <a href="/districts/">{{ keyRaceCount }} extremely close races</a> across the country
                 where net neutrality supporters can make the most difference pressuring
                 lawmakers to do the right thing. Click on the links below to help out.
                </p>

                <ActionButtons/>
              </div>

              <Candidates
                v-for="(race, index) in keyRaces.house"
                :key="`key-house-race-${index}`"
                :race="race" />

              <Candidates
                v-for="(race, index) in keyRaces.senate"
                :key="`key-senate-race-${index}`"
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
import ActionButtons from '~/components/ActionButtons'
import SocialShareButtons from '~/components/SocialShareButtons'

export default {
  components: {
    Candidates,
    ActionButtons,
    SocialShareButtons
  },

  data () {
    return {
      isLoading: false,
      address: null,
      results: null,
      keyRaces: null,
      errorMessage: null
    }
  },

  computed: {
    keyRaceCount() {
      if (this.keyRaces) {
        return this.keyRaces.senate.length + this.keyRaces.house.length
      }
      else {
        return 'several'
      }
    }
  },

  mounted() {
    this.autocompleteAddress()
    this.fetchKeyRaces()

    // uncomment to test target politician
    // this.address = '120 N California St, Yerington, NV'
    // this.fetchCandidates()

    const query = this.$route.query || {}

    // if address param is present, auto-fill scoreboard form
    if (query.address) {
      this.address = this.$route.query.address
      this.fetchCandidates()
      location.hash = '#scoreboard'
    }
    // if district param is present, fetch that scoreboard
    else if (query.district) {
      this.fetchCandidatesByDistrict(query.district)
      location.hash = '#scoreboard'
    }
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
          self.fetchCandidates()
        }
      })
    },

    async fetchCandidates() {
      this.results = null
      this.isLoading = true
      this.errorMessage = null

      try {
        const { data } = await axios.get(`https://vfnn-scoreboard-api.fftf.xyz/?address=${this.address}`)
        this.results = data
      }
      catch (error) {
        this.errorMessage = "😳 Oh no! We couldn't find any information for your address."
      }

      this.isLoading = false
    },

    async fetchCandidatesByDistrict(district) {
      this.results = null
      this.isLoading = true
      this.errorMessage = null

      try {
        const { data } = await axios.get(`https://data.battleforthenet.com/vfnn/scoreboard/${district.toString().toUpperCase()}.json`)
        this.results = data
      }
      catch (error) {
        this.errorMessage = "😳 Oh no! We couldn't find any information for your district."
      }

      this.isLoading = false
    },

    async fetchKeyRaces() {
      try {
        const { data } = await axios.get('https://data.battleforthenet.com/vfnn/scoreboard/important.json')
        this.keyRaces = data
      }
      catch (error) {
        console.error(error)
      }
    },

    openModal(type) {
      this.$store.commit('setModalVisibility', true)
      this.$store.commit('setModalType', type)
    }
  }
}
</script>
