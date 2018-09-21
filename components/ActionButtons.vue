<template>
  <div class="row">
    <div class="sml-c12 lrg-c4 sml-push-y2">
      <div class="with-border is-rounded sml-pad-1">
        <a :href="$store.state.volunteerURL"
           target="_blank"
           class="btn btn-block btn-brand">
          Volunteer
        </a>
        <h6 class="text-brand sml-push-y1">
          to text people in key districts
        </h6>
      </div> <!-- .with-border -->
    </div> <!-- .c -->
    <div class="sml-c12 lrg-c4 sml-push-y2">
      <div class="with-border is-rounded sml-pad-1">
        <a href="#join" @click.prevent="scrollTo('#join')"
           target="_blank"
           class="btn btn-block btn-brand">
          Join
        </a>
        <h6 class="text-brand sml-push-y1">
          your local Facebook Group
        </h6>
      </div> <!-- .with-border -->
    </div> <!-- .c -->
    <div class="sml-c12 lrg-c4 sml-push-y2">
      <div class="with-border is-rounded sml-pad-1">
        <a :href="$store.state.donateURL"
           target="_blank"
           class="btn btn-block btn-brand">
          Donate
        </a>
        <h6 class="text-brand sml-push-y1">
          to educate voters in key districts
        </h6>
      </div> <!-- .with-border -->
    </div> <!-- .c -->
  </div> <!-- .row -->
</template>

<script>
import { smoothScrollToElement } from '~/assets/js/helpers'

export default {
  methods: {
    scrollTo(hash) {
      const duration = 500
      smoothScrollToElement(hash, duration)
      // WARNING: Since there is no server a setTimeout is ok. However, with a
      // server this is a dangerous eval. Remove if this project ever is hosted
      // with a JS server.
      setTimeout(() => {
        location.hash = hash
      }, duration)
    }
  }
}
</script>
