<style lang="scss" scoped>
@mixin party-button($bg-color, $small-color) {
  background-color: $bg-color;
  box-shadow: 0px -1px 0px lighten($bg-color, 10%);

  small {
    color: $small-color;
  }

  &:hover {
    background-color: darken($bg-color, 10%);
    box-shadow: 0px -1px 0px $bg-color;

    small {
      color: darken($small-color, 5%);
    }
  }
}

.btn-party {
  text-transform: none;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;

  small {
    text-transform: uppercase;
    line-height: 1.1;
  }
}

.btn-donate {
  @include party-button(#7845bc, #d7bdff);
}

.btn-facebook-group {
  @include party-button(#3f63a5, #b2c8ff);
}

.btn-volunteer {
  @include party-button(#d95391, #581827);
}

.warning-border {
  border: 1px solid #f97054;
  border-radius: $default-border-radius;
}

.target-photo {
  position: relative;
  border-radius: $default-border-radius;

  img {
    filter: grayscale(100%);
    border-radius: $default-border-radius;
  }

  &:after {
    border-radius: $default-border-radius;
    display: block;
    content: '';
    position: absolute;
    top:    0;
    left:   0;
    bottom: 0;
    right:  0;
    width:  100%;
    height: 100%;
    background: $warn-color;
    opacity: 0.5;
  }
}
</style>

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

            <p class="text-warn" v-if="errorMessage">{{ errorMessage }}</p>

            <form class="flex-row sml-push-y2 med-push-y3"
                  @submit.prevent="fetchCandidates">
              <input type="text"
                     v-model="address"
                     class="sml-flex-2 med-flex-3"
                     placeholder="Street Address, City, State ZIP"
                     ref="addressInput"
                     required />
              <button class="btn" :disabled="isLoading">
                <span v-if="isLoading">Loading...</span>
                <span v-else>Let&rsquo;s go</span>
              </button>
            </form>
          </div> <!-- .c -->
        </div> <!-- .row -->

        <div class="row" v-if="results">
          <div class="sml-c12 lrg-c9 grid-center">
            <section id="results"
                     class="sml-pad-2 med-pad-4 sml-push-y4 fill-brand-darkest is-rounded">

              <div v-if="targetPolitician">
                <div class="target-politician">
                  <h2 class="text-center text-white">YOUR {{ targetPolitician.title }} OPPOSES NET NEUTRALITY AND THEY’RE FACING A TIGHT ELECTION</h2>

                  <div class="warning-border sml-push-y2 sml-pad-2">
                    <div class="row">
                      <div class="sml-c12 sml-pad-x6 med-c4 med-pad-x1">
                        <div class="target-photo">
                          <img :src="targetPolitician.photo" :alt="targetPolitician.name">
                        </div>
                      </div>
                      <div class="sml-c12 med-c8 sml-pad-y2 med-pad-y0">
                        <p>Your current member of Congress, {{ targetPolitician.name }} took {{ targetPolitician.cable_contributions }} in “campaign donations” from big ISPs and refuses to support a resolution to restore net neutrality. Tell them to get on the right side of history or face the consequences. Then share this so everyone in your area knows where the candidates stand on the free and open Internet when they head to the polls.</p>
                        <div class="row med-pad-y1">
                          <div class="sml-c12 sml-pad-y1 med-c6 med-pad-y0">
                            <a href="https://www.battleforthenet.com/call" class="btn btn-block btn-success">Call</a>
                          </div>
                          <div class="sml-c12 med-c6">
                            <a href="https://www.battleforthenet.com" class="btn btn-block btn-brand-med">Write</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sml-pad-y2 grid-center">
                  <SocialShareButtons />
                </div>
                <div class="sml-push-y4"></div>
              </div>

              <h2 class="text-center text-white">
                Here&rsquo;s where candidates in your area stand on Net
                Neutrality
              </h2>

              <Candidates :race="results.senate" key="local-senate" />
              <Candidates :race="results.house" key="local-house" />
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
                     class="sml-pad-2 med-pad-4 sml-push-y4 fill-brand-darkest is-rounded warning-border">

              <div class="text-center">
                <h2>Help out in these key races</h2>
                <p class="sml-push-y2 med-push-y3">
                 We&rsquo;ve identified <a href="/races/">22 extremely close races</a> across the country
                 where net neutrality supporters can make a difference. Click on
                 the links below to help out.
                </p>

                <div class="row">
                 <div class="sml-c12 lrg-c4 sml-push-y2">
                   <a :href="$store.state.volunteerURL" target="_blank" class="btn btn-block btn-dark btn-party btn-volunteer">
                     Volunteer <small>to text people in key districts</small>
                   </a>
                 </div> <!-- .c -->
                 <div class="sml-c12 lrg-c4 sml-push-y2">
                   <a :href="$store.state.joinURL" target="_blank" class="btn btn-block btn-dark btn-party btn-facebook-group">
                     Join <small>your local Facebook Group</small>
                   </a>
                 </div> <!-- .c -->
                 <div class="sml-c12 lrg-c4 sml-push-y2">
                   <a :href="$store.state.donateURL" target="_blank" class="btn btn-block btn-dark btn-party btn-donate">
                     Donate <small>to educate voters in key districts</small>
                   </a>
                 </div> <!-- .c -->
                </div> <!-- .row -->
              </div>

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
import SocialShareButtons from '~/components/SocialShareButtons'

export default {
  components: {
    Candidates,
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
    targetPolitician() {
      if (this.results) {
        for (let race of ['house', 'senate']) {
          const target = this.results[race].candidates.find(c => c.incumbent && c.supporter === false)

          if (target) {
            return Object.assign({
              title: race === 'senate' ? 'Senator' : 'Representative'
            }, target)
          }
        }
      }
    }
  },

  mounted() {
    this.autocompleteAddress()
    this.fetchKeyRaces()

    // uncomment to test target politician
    // this.address = '120 N California St, Yerington, NV'
    // this.fetchCandidates()
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
