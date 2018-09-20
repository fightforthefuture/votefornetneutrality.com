<template>
  <div class="text-center">
    <div v-if="!hasCalled">
      <h2>Congress can save Net Neutrality</h2>
      <p class="sml-push-y1">
        Enter your phone number below. We&rsquo;ll provide you with a suggestion
        of what to say and we&rsquo;ll connect you with your lawmakers.
      </p>
      <p class="text-warn sml-push-y2" v-if="errorMessage">{{ errorMessage }}</p>
      <form @submit.prevent="submitForm()"
            class="flex-row sml-flex-col med-flex-row sml-push-y3">
        <input class="phone sml-flex-2"
               type="tel"
               placeholder="Phone Number*"
               v-model.trim="phone"
               required>
        <input class="sml-push-y1 med-push-y0"
               type="tel"
               placeholder="ZIP Code*"
               v-model.trim="zipCode"
               required>
        <button class="btn btn-cta sml-push-y1 med-push-y0">
          <span v-if="isSending">Saving...</span>
          <span v-else>Call</span>
        </button>
      </form>
      <p class="disclaimer sml-push-y1">
        <small>
          Your number will only be used for this call and will never be shared
          with third parties.
          <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
        </small>
      </p>
    </div> <!-- v-if -->

    <div v-if="hasCalled">
      <h2>Calling you now</h2>
      <h3 class="sml-push-y2">Introduce yourself, be polite, and say:</h3>
      <blockquote class="sml-push-y2 text-brand-light">
        I&rsquo;m calling to ask my lawmakers to support the Congressional
        Review Act resolution to block the FCC&rsquo;s repeal of net neutrality
        and restore an open Internet. Thank you.
      </blockquote>
      <p class="sml-push-y2 text-brand-light">
        If lines are busy, we may call you in a few minutes.
      </p>

      <h3 class="sml-push-y3">Done calling? Do these things, too!</h3>
      <ActionButtons />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { postFormData } from '~/assets/js/helpers'
import ActionButtons from '~/components/ActionButtons'

export default {
  components: {
    ActionButtons
  },

  data() {
    return {
      isSending: false,
      hasCalled: false,
      errorMessage: null
    }
  },

  computed: {
    campaignId() { return "RED_ALERT_BattleForTheNet_Call_House_2Sens"},

    zipCode: {
      get() {
        return this.$store.state.zipCode
      },

      set(value) {
        this.$store.commit('setZipCode', value)
      }
    },

    phone: {
      get() {
        return this.$store.state.phone
      },

      set(value) {
        this.$store.commit('setPhone', value)
      }
    }
  },

  methods: {
    async submitForm() {
      this.isSending = true

      try {
        const { data } = await postFormData(
          "https://call-congress.fightforthefuture.org/create", {
          campaignId: this.campaignId,
          userPhone: this.phone,
          userLocation: this.zipCode
        })

        this.isSending = false
        this.hasCalled = true
        this.$trackEvent('vote_call_form', 'submit')
      }
      catch (err) {
        this.isSending = false
        this.errorMessage = "That didn't work for some reason :("
      }
    }
  }
}
</script>
