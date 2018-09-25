<template>
  <div>
    <h2 id="banner-media">Banner Ads</h2>
    <p class="sml-push-y2 med-push-y3">
      If you run a website or blog, post our banner ads to let your visitors
      know you support net neutrality. Be sure to link these ads back to
      <a href="https://www.votefornetneutrality.com/">VoteForNetNeutrality.com</a>.
    </p>

    <h4 class="sml-push-y2">300 x 300</h4>
    <div class="sml-push-y1">
      <a href="/media/300x300-VOTE.png">
        <img src="/media/300x300-VOTE.png"
             alt="Vote for Net Neutrality 300 x 300 image"
             class="grid-center img-hover-grow">
      </a>
    </div> <!-- .push -->

    <div v-if="showAll">
      <h4 class="sml-push-y2">600 x 450</h4>
      <div class="sml-push-y1">
        <a href="/media/600x450-VOTE.png">
          <img src="/media/600x450-VOTE.png"
               alt="Vote for Net Neutrality 600 x 450 image"
               class="grid-center img-hover-grow">
        </a>
      </div> <!-- .push -->

      <h4 class="sml-push-y2">600 x 500</h4>
      <div class="sml-push-y1">
        <a href="/media/600x500-VOTE.png">
          <img src="/media/600x500-VOTE.png"
               alt="Vote for Net Neutrality 600 x 500 image"
               class="grid-center img-hover-grow">
        </a>
      </div> <!-- .push -->

      <h4 class="sml-push-y2">600 x 600</h4>
      <div class="sml-push-y1">
        <a href="/media/600x600-VOTE.png">
          <img src="/media/600x600-VOTE.png"
               alt="Vote for Net Neutrality 600 x 600 image"
               class="grid-center img-hover-grow">
        </a>
      </div> <!-- .push -->
    </div> <!-- v-if -->
    <div v-else class="sml-push-y2 med-push-y3">
      <nuxt-link to="/media/#banner-media">View all</nuxt-link>
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
