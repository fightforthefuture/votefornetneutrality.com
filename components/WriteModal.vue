<template>
  <div class="text-center">
    <div v-if="!hasSigned">
      <h2>Congress can save Net Neutrality</h2>
      <form @submit.prevent="submitForm()" class="sml-push-y2 med-push-y3">
        <p class="text-warn" v-if="errorMessage">{{ errorMessage }}</p>
        <div class="flex-row">
          <input v-model="name" type="text" placeholder="Name*" required>
          <input v-model="email" type="email" placeholder="Email*" required>
        </div> <!-- .flex-row -->
        <div class="flex-row sml-push-y2">
          <input v-model="address" type="text" placeholder="Address"
                 class="sml-flex-4">
          <input v-model="zipCode" type="tel" placeholder="ZIP Code">
        </div> <!-- .flex-row -->
         <button class="btn btn-block sml-push-y2 med-push-y3" :disabled="isSending">
          <span v-if="isSending">
            Sending...
          </span>
          <span v-else>
            Write Congress
          </span>
        </button>
        <p class="sml-push-y1"><small>
          <a href="https://www.fightforthefuture.org/" target="_blank">
            Fight for the Future</a>
          will email you updates, and you can unsubscribe at any time. If
          you enter your number (it&rsquo;s optional) we will follow up by SMS.
          Message &amp; data rates apply. You can always text STOP to stop
          receiving messages.
          <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
        </small></p>
      </form>
    </div> <!-- v-if -->

    <div v-if="hasSigned">
      <h2><span class="text-success">Thanks!</span></h2>
      <h2>Will you do more?</h2>
      <ActionButtons />
    </div> <!-- v-if -->
  </div>
</template>

<script>
import axios from 'axios'
import { sendToMothership } from '~/assets/js/helpers'
import ActionButtons from '~/components/ActionButtons'

export default {
  components: {
    ActionButtons
  },

  data() {
    return {
      isSending: false,
      hasSigned: false,
      errorMessage: null,
      // form fields
      name: null,
      email: null,
      address: null,
      zipCode: null
    }
  },

  methods: {
    async submitForm() {
      if (this.isSending) return

      this.isSending = true

      try {
        const response = await sendToMothership({
          subject: "Vote for Net Neutrality",
          member: {
            first_name: this.name,
            email: this.email,
            street_address: this.address,
            postcode: this.zipCode,
            country: 'US'
          },
          hp_enabled: 'true',
          guard: '',
          // contact_congress: 1, // TODO: Optional
          // fcc_ecfs_docket: "17-108", // TODO: Optional
          an_tags: "[\"net-neutrality\"]",
          an_petition_id: this.$store.state.anPetitionId
          // action_comment: TODO add if desired
        })

        this.$trackEvent('petition_form', 'submit')
        this.isSending = false
        this.hasSigned = true
      }
      catch (err) {
        self.isSending = false
        self.errorMessage = "Sorry, that didn’t work for some reason. Please try again."
      }
    },
  }
}
</script>
