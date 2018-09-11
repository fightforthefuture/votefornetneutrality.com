<template>
  <div class="sml-push-y3 med-push-y6 with-glow">
    <div class="glow-content">
      <div class="messages sml-pad-2 is-rounded-top"
           ref="messages">
        <div v-for="(message, index) in messages"
             :key="index"
             :class="{
              'message': message.type === 'bubble',
              'message-reply': message.style === 'reply',
              'message-success': message.style === 'success',
              'sml-push-y1': index > 0
             }">
          <span v-html="message.content"></span>

          <img v-if="message.type === 'party-emoji'"
               src="~assets/images/party-emoji.png"
               alt="Hooray!"
               class="img-party-emoji">

          <p v-if="message.type === 'disclaimer'"
             class="text-center sml-push-y1 med-push-y2">
            <small>
              If you didn&rsquo;t recieve a text
              <a @click.prevent="initChatBot">click here</a> to re-enter your
              phone number. Or report a problem <a href="#TODO">here</a>.
            </small>
          </p>
        </div> <!-- message -->
      </div> <!-- .messages -->

      <div class="sml-pad-2 fill-brand-darkest-color is-rounded-bottom">
        <form @submit.prevent="formSubmit" class="flex-row">
          <input type="tel"
                 v-model="phoneNumber"
                 placeholder="Phone number"
                 class="med-flex-2" />
          <button class="btn btn-block btn-lrg" href="#TODO">
            Text me
          </button>
        </form>
        <p class="sml-push-y1 text-center">
          <small>
            <a href="https://www.fightforthefuture.org/" target="_blank">
              Fight for the Future</a>
            &amp; its Education Fund will contact you.
            <a href="#TODO">Privacy Policy</a>
          </small>
        </p>
      </div> <!-- form container -->
    </div> <!-- widget -->
  </div> <!-- .with-glow -->
</template>

<script>
import { smoothScrollWithinElement } from '~/assets/js/helpers'

export default {
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

    formSubmit() {
      // TODO: validate and real submit
      this.messages.push({
        type: 'bubble',
        style: 'reply',
        content: this.phoneNumber
      })
      // TODO: real success
      this.messages.push(
        {
          type: 'party-emoji'
        },
        {
          type: 'bubble',
          style: 'success',
          content: "<strong>Awesome!</strong> I just sent you a text. Check your phone to make sure you received it."
        },
        {
          type: 'disclaimer'
        }
      )
    }
  }
}
</script>
