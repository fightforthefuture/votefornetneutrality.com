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

      <div class="sml-pad-2 fill-brand-darkest is-rounded-bottom">
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
              will contact you via SMS. Message &amp; data rates apply. Read our
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link> and
              <nuxt-link to="/terms">Terms of Service</nuxt-link>.
            </small>
          </p>
        </div> <!-- v-if-->
        <div v-if="isFormCompleted">
          <SocialShareButtons/>
        </div> <!-- v-if-->
      </div> <!-- form container -->
    </div> <!-- widget -->
  </div> <!-- .with-glow -->
</template>

<script>
import axios from 'axios'
import { smoothScrollWithinElement } from '~/assets/js/helpers'
import Message from '~/components/Message'
import SocialShareButtons from '~/components/SocialShareButtons'

export default {
  components: {
    Message,
    SocialShareButtons
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
        content: "Hi! I\'m HelloVote, and I\'m here to help. <em>🤖</em>"
      })
      // WARNING: Dangerous eval. Remove `setTimeout` if hosted with a JS server.
      setTimeout(() => {
        this.messages.push({
          type: 'bubble',
          style: 'default',
          content: "I can tell you where candidates in your area stand on net neutrality, help you register to vote, remind your friends to vote, and more."
        })
      }, 1500) // +1.5 seconds
      setTimeout(() => {
        this.messages.push({
          type: 'bubble',
          style: 'default',
          content: "Please enter your phone number, and I\'ll text you to get started."
        })
      }, 3000) // +1.5 seconds
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
          `${process.env.botApiUrl}/conversations`,
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
