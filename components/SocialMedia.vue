<template>
  <section id="social" class="sml-pad-y2 med-pad-y4 text-center">
    <div class="wrapper">
      <div class="row">
        <div class="sml-c12 lrg-c8 grid-center text-center">
          <h2>Social media</h2>
          <p class="sml-push-y2 med-push-y3">
            Put your small piece of the Internet on alert by changing your profile on social 
            media to the images below.  
            Then <a href="https://docs.google.com/document/d/1aRhHsHCW1HB2fOJW4lIOurYYpXP2kb3vlZ2O7vniMoo/edit?disco=uiAAAACMaQa_s&ts=5ba2d9b3" target="_blank">click here</a>
            to see ideas for blog posts, emails, tweets and more.
          </p>
        </div> <!-- .c -->
      </div> <!-- .row -->

      <!-- Profile -->
      <h4 class="sml-push-y4">Profile Images</h4>
      <div class="row">
        <div class="sml-c12 med-c3 lrg-c2 lrg-s2">
          <h5 class="sml-push-y2">Vote</h5>
          <div class="sml-push-y1">
            <a href="/media/Profile-VOTE.png">
              <img src="/media/Profile-VOTE.png"
                   alt="Vote for Net Neutrality profile image"
                   class="grid-center img-avatar img-hover-grow">
            </a>
          </div> <!-- .push -->
        </div> <!-- .c -->

        <div class="sml-c12 med-c3 lrg-c2">
          <h5 class="sml-push-y2">Angry</h5>
          <div class="sml-push-y1">
            <a href="/media/Profile-ANGRY.png">
              <img src="/media/Profile-ANGRY.png"
                   alt="Vote for Net Neutrality profile image"
                   class="grid-center img-avatar img-hover-grow">
            </a>
          </div> <!-- .push -->
        </div> <!-- .c -->

        <div class="sml-c12 med-c3 lrg-c2">
          <h5 class="sml-push-y2">Campaign</h5>
          <div class="sml-push-y1">
            <a href="/media/Profile-CAMPAIGN.png">
              <img src="/media/Profile-CAMPAIGN.png"
                   alt="Vote for Net Neutrality profile image"
                   class="grid-center img-avatar img-hover-grow">
            </a>
          </div> <!-- .push -->
        </div> <!-- .c -->

        <div class="sml-c12 med-c3 lrg-c2">
          <h5 class="sml-push-y2">Future</h5>
          <div class="sml-push-y1">
            <a href="/media/Profile-FUTURE.png">
              <img src="/media/Profile-FUTURE.png"
                   alt="Vote for Net Neutrality profile image"
                   class="grid-center img-avatar img-hover-grow">
            </a>
          </div> <!-- .push -->
        </div> <!-- .c -->
      </div> <!-- .row -->

      <div v-if="showAll">
        <!-- Cover -->
        <h4 class="sml-push-y6">Cover Images</h4>
        <div class="row">
          <div class="sml-c12 med-c6">
            <h5 class="sml-push-y2">Vote</h5>
            <div class="sml-push-y1">
              <a href="/media/Cover-VOTE.png">
                <img src="/media/Cover-VOTE.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c6">
            <h5 class="sml-push-y2">Attention</h5>
            <div class="sml-push-y1">
              <a href="/media/Cover-ATTENTION.png">
                <img src="/media/Cover-ATTENTION.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c6">
            <h5 class="sml-push-y2">Angry</h5>
            <div class="sml-push-y1">
              <a href="/media/Cover-ANGRY.png">
                <img src="/media/Cover-ANGRY.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c6">
            <h5 class="sml-push-y2">Campaign</h5>
            <div class="sml-push-y1">
              <a href="/media/Cover-CAMPAIGN.png">
                <img src="/media/Cover-CAMPAIGN.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c6">
            <h5 class="sml-push-y2">Future</h5>
            <div class="sml-push-y1">
              <a href="/media/Cover-FUTURE.png">
                <img src="/media/Cover-FUTURE.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c6">
            <h5 class="sml-push-y2">Protesters</h5>
            <div class="sml-push-y1">
              <a href="/media/Cover-PROTESTERS.png">
                <img src="/media/Cover-PROTESTERS.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->
        </div> <!-- .row -->


        <!-- Instagram Story -->
        <h4 class="sml-push-y6">Instgram Story</h4>
        <div class="row">
          <div class="sml-c12 med-c4">
            <h5 class="sml-push-y2">Vote</h5>
            <div class="sml-push-y1">
              <a href="/media/Instagram-Story-VOTE.png">
                <img src="/media/Instagram-Story-VOTE.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c4">
            <h5 class="sml-push-y2">Attention</h5>
            <div class="sml-push-y1">
              <a href="/media/Instagram-Story-ATTENTION.png">
                <img src="/media/Instagram-Story-ATTENTION.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c4">
            <h5 class="sml-push-y2">Angry</h5>
            <div class="sml-push-y1">
              <a href="/media/Instagram-Story-ANGRY.png">
                <img src="/media/Instagram-Story-ANGRY.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c4">
            <h5 class="sml-push-y2">Campaign</h5>
            <div class="sml-push-y1">
              <a href="/media/Instagram-Story-CAMPAIGN.png">
                <img src="/media/Instagram-Story-CAMPAIGN.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c4">
            <h5 class="sml-push-y2">Future</h5>
            <div class="sml-push-y1">
              <a href="/media/Instagram-Story-FUTURE.png">
                <img src="/media/Instagram-Story-FUTURE.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->

          <div class="sml-c12 med-c4">
            <h5 class="sml-push-y2">Protesters</h5>
            <div class="sml-push-y1">
              <a href="/media/Instagram-Story-PROTESTERS.png">
                <img src="/media/Instagram-Story-PROTESTERS.png"
                     alt="Vote for Net Neutrality cover image"
                     class="grid-center img-hover-grow">
              </a>
            </div> <!-- .push -->
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- v-if -->

      <div v-else class="sml-push-y2 med-push-y3">
        <nuxt-link to="/media/#social">View all</nuxt-link>
      </div> <!-- .push -->
    </div> <!-- .wrapper -->
  </section>
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
