<template>
  <header class="page-header">
    <div class="wrapper">
      <div class="row">
        <div class="sml-c6 med-c8">
          <a href="/">
            <Logo/>
          </a>
        </div> <!-- .c -->
        <div class="sml-c6 med-c4">
          <form class="sml-push-y1">
            <select v-model="selectedState" @change="fetchSelfies(selectedState)">
              <option :value="null">Show all states</option>
              <option v-for="(name, code) in states" :key="code" :value="code">
                {{ name }}
              </option>
            </select>
          </form>
        </div> <!-- .c -->
      </div> <!-- .row -->
    </div> <!-- .wrapper -->
  </header>
</template>

<script>
import Logo from '~/components/Logo'
import US_STATES from '~/assets/data/states.json'

export default {
  components: {
    Logo
  },

  data () {
    return {
      selectedState: null
    }
  },

  computed: {
    states() { return US_STATES }
  },

  async created() {
    // Fetch selfies (optionally via `/?state=XX` in url query param)
    let newState = this.$route.query.state ? this.$route.query.state.toUpperCase() : null
    console.log('created')
    if (newState && US_STATES[newState]) {
      console.log(newState)
      this.selectedState = newState
      this.fetchSelfies(this.selectedState)
    } else {
      console.log('created fetch')
      this.fetchSelfies(null)
    }
  },

  methods: {
    fetchSelfies(newState) {
      if (newState) {
        // this.$router.replace(`/selfies/?state=${newState.toLowerCase()}`)
        this.$store.dispatch('getSelfies', { state: newState.toLowerCase() })
      } else {
        console.log('getSelfies from fetch')
        // this.$router.replace('/selfies')
        this.$store.dispatch('getSelfies', { page: 1 })
      }
    }
  }
}
</script>
