<template>
  <div class="sml-push-y3 med-push-y6 with-glow">
    <div class="glow-content">
      <div class="messages sml-pad-2 is-rounded-top fill-brand-dark-color">
        <div class="message">
          Please enter your phone number, so we can continue via text
          message.
        </div> <!-- .message -->
        <div class="message message-reply sml-push-y1">
          555-555-5555
        </div> <!-- .message -->
        <img src="~assets/images/party-emoji.png" alt="Hooray!"
             class="img-party-emoji">
        <div class="message message-success sml-push-y1">
          <strong>Awesome!</strong> I just sent you a text. Check your phone to
          make sure you received it.
        </div> <!-- .message -->
        <p class="text-center sml-push-y1 med-push-y2">
          <small>
            If you didn&rsquo;t recieve a text <a href="#TODO">click here</a> to
            re-enter your phone number. Or report a problem
            <a href="#TODO">here</a>.
          </small>
        </p>
      </div> <!-- .messages -->

      <div class="sml-pad-2 fill-brand-darkest-color is-rounded-bottom">
        <form action="#TODO" class="flex-row">
          <input type="tel" placeholder="Phone number" class="med-flex-2" />
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
export default {
  props: {
    messages: {
      type: Object,
      required: true
    }
  }
}
</script>
