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
      </div> <!-- form container -->
    </div> <!-- widget -->
  </div> <!-- .with-glow -->
</template>

<script>
import axios from 'axios'
import { smoothScrollWithinElement } from '~/assets/js/helpers'
import Message from '~/components/Message'

export default {
  components: {
    Message
  },

  data () {
    return {
      phoneNumber: null,
      messages: []
    }
  },

  created() {
    this.initChatBot()
  },

  watch: {
    messages(newVal, oldVal) {
      smoothScrollWithinElement(this.$refs.messages, this.$refs.messages.scrollHeight, 500)
    }
  },

  methods: {
    initChatBot() {
      // Start a new chat flow and clear any existing ones
      this.phoneNumber = null
      this.messages = []
      this.messages.push({
        type: 'bubble',
        style: 'default',
        content: 'Please enter your phone number, so we can continue via text message.'
      })
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
        }, 1500)
        setTimeout(() => {
          this.messages.push({
            type: 'bubble',
            style: 'success',
            content: "<strong>Awesome!</strong> I just sent you a text. Check your phone to make sure you received it."
          })
        }, 3000)
        setTimeout(() => {
          this.messages.push({
            type: 'disclaimer'
          })
        }, 4500)
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
