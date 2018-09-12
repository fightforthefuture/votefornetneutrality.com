<template>
  <div class="sml-push-y3 med-push-y6 with-glow">
    <div class="glow-content">
      <div class="messages sml-pad-2 is-rounded-top"
           ref="messages">
        <div v-for="(message, index) in messages" :key="index">
          <Message
              :message="message"
              :index="index"
              :is-reply="message.style && message.style === 'reply' ? true : false"
              :init-chat="initChatBot" />
        </div> <!-- message -->
      </div> <!-- .messages -->

      <div class="sml-pad-2 fill-brand-darkest-color is-rounded-bottom">
        <div v-if="!isFormCompleted">
          <form @submit.prevent="formSubmit" class="flex-row">
            <input type="tel"
                   v-model="phoneNumber"
                   placeholder="Phone number"
                   class="med-flex-2"
                   required />
            <button class="btn btn-block btn-lrg"
                    :disabled="phoneNumber === null || phoneNumber.length <= 0">
              Text me
            </button>
          </form>
          <p class="sml-push-y1 text-center">
            <small>
              <a href="https://www.fightforthefuture.org/" target="_blank">
                Fight for the Future</a>
              &amp; its Education Fund will contact you.
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
            </small>
          </p>
        </div> <!-- v-if-->
        <div v-if="isFormCompleted">
          <ul class="flex-center text-center">
            <li class="sml-pad-x1">Help us spread the word:</li>
            <li>
              <ShareButton
                network="twitter"
                :is-button="false"
                :should-display-text="false"
                @click.native="$trackClick('twitter_share_button_after_signup')" />
            </li>
            <li class="sml-pad-x1">
              <ShareButton
                network="facebook"
                :is-button="false"
                :should-display-text="false"
                @click.native="$trackClick('facebook_share_button_after_signup')" />
            </li>
          </ul>
        </div> <!-- v-if-->
      </div> <!-- form container -->
    </div> <!-- widget -->
  </div> <!-- .with-glow -->
</template>

<script>
import axios from 'axios'
import { smoothScrollWithinElement } from '~/assets/js/helpers'
import Message from '~/components/Message'
import ShareButton from '~/components/ShareButton'

export default {
  components: {
    Message,
    ShareButton
  },

  data () {
    return {
      phoneNumber: null,
      messages: [],
      isFormCompleted: false
    }
  },

  created() {
    this.initChatBot()
  },

  watch: {
    messages(newVal, oldVal) {
      // Scroll once on the initial update to the loading dots and again after
      // the message transition is finished (especially for longer messages)
      this.scrollToLastMessage()
      // WARNING: Since there is no server a setTimeout is ok. However, with a
      // server this is a dangerous eval. Remove if this project ever is hosted
      // with a JS server.
      setTimeout(() => {
        this.scrollToLastMessage()
      }, 1000) // Allows time for the CSS transition in
    }
  },

  methods: {
    initChatBot() {
      // Start a new chat flow and clear any existing ones
      this.phoneNumber = null
      this.isFormCompleted = false
      this.messages = []
      this.messages.push({
        type: 'bubble',
        style: 'default',
        content: 'Please enter your phone number, so we can continue via text message.'
      })
    },

    scrollToLastMessage(){
      smoothScrollWithinElement(this.$refs.messages, this.$refs.messages.scrollHeight, 500)
    },

    async formSubmit() {
      // Display phone number the voter typed as their "reply"
      this.messages.push({
        type: 'bubble',
        style: 'reply',
        content: this.phoneNumber
      })

      // POST to Chatbot API
      try {
        const { data } = await axios.post(
          'https://vfnnbot-api.herokuapp.com/conversations',
          {
            "type": "web",
            "recipients": [ {"username": this.phoneNumber } ]
          }
        )
        // Display messages on success
        // WARNING: Since there is no server a setTimeout is ok. However, with a
        // server this is a dangerous eval. Remove if this project ever is hosted
        // with a JS server.
        setTimeout(() => {
          this.messages.push({
            type: 'party-emoji'
          })
          this.isFormCompleted = true
        }, 1000) // Allows time for the "reply" message's CSS transition in
        setTimeout(() => {
          this.messages.push({
            type: 'bubble',
            style: 'success',
            customContent: 'subscribed'
          })
        }, 2500) // +1.5 seconds
        return data
      }
      catch (error) {
        // Display messages on error
        this.messages.push({
          type: 'bubble',
          style: 'error',
          content: 'Sorry something went wrong. Please check your phone number and try again.'
        })
        return error
      }
    }
  }
}
</script>
