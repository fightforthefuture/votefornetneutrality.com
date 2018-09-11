<template>
  <div>
    <div class="dots sml-push-y1" v-if="isLoading">
      <div><div><!-- Dot 1 --></div></div>
      <div><div><!-- Dot 2 --></div></div>
      <div><div><!-- Dot 3 --></div></div>
    </div> <!-- .dots -->

    <transition-group name="message-transition" appear>
      <div v-if="!isLoading"
           :key="`message-${index}`"
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
            <a @click.prevent="initChat">click here</a> to re-enter your
            phone number. Or report a problem <a href="#TODO">here</a>.
          </small>
        </p>
      </div> <!-- message -->
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isReply: {
      type: Boolean,
      default: false
    },
    initChat: {
      type: Function,
      required: true
    }
  },

  data () {
    return {
      isLoading: true
    }
  },

  created() {
    if (this.isReply) {
      this.isLoading = false
    } else {
      // WARNING: Since there is no server a setTimeout is ok. However, with a
      // server this is a dangerous eval. Remove if this project ever is hosted
      // with a JS server.
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>
