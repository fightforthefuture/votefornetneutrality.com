<template>
  <div>
    <h2 id="social-media">Social media</h2>
    <p class="sml-push-y2 med-push-y3">
      If you&rsquo;re active on social media, have a video channel, or moderate
      an online forum, put your small piece of the Internet on alert by changing
      your profile on social media to the images below.  You can also schedule
      frequent posts linking to
      <a href="https://www.votefornetneutrality.com/">VoteForNetNeutrality.com</a>
      where people can take action.
    </p>
    <p>
      <a href="https://docs.google.com/document/d/1aRhHsHCW1HB2fOJW4lIOurYYpXP2kb3vlZ2O7vniMoo/edit?disco=uiAAAACMaQa_s&ts=5ba2d9b3" target="_blank">Click here</a>
      to see ideas for blog posts, emails, tweets and more.
    </p>

    <h4 class="sml-push-y2">Avatar Images</h4>
    <div class="sml-push-y1">
      <a href="/media/Profile-VOTE.png">
        <img src="/media/Profile-VOTE.png"
             alt="Vote for Net Neutrality avatar image"
             class="grid-center img-avatar img-hover-grow">
      </a>
    </div> <!-- .push -->

    <div v-if="showAll">
      <h4 class="sml-push-y2">Facebook Header Images</h4>
      <div class="sml-push-y1">
        <a href="/media/Cover-VOTE.png">
          <img src="/media/Cover-VOTE.png"
               alt="Vote for Net Neutrality Facebook header image"
               class="grid-center img-hover-grow">
        </a>
      </div> <!-- .push -->

      <h4 class="sml-push-y2">Instagram Story</h4>
      <div class="sml-push-y1">
        <a href="/media/Instagram-Story-VOTE.png">
          <img src="/media/Instagram-Story-VOTE.png"
               alt="Vote for Net Neutrality Instagram story image"
               class="grid-center img-instagram-story img-hover-grow">
        </a>
      </div> <!-- .push -->
    </div> <!-- v-if -->
    <div v-else class="sml-push-y2 med-push-y3">
      <nuxt-link to="/media/#social-media">View all</nuxt-link>
    </div> <!-- .push -->
  </div>
</template>

<script>
export default {
  props: {
    showAll: {
      type: Boolean,
      default: true
    }
  }
}
</script>
