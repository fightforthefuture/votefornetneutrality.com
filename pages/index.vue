<template>
  <div>
    <section id="text-me" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center">
            <Logo/>
            <Chat/>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <Scoreboard/>

<!--     <section id="widget" class="sml-pad-y2 med-pad-y4 fill-brand-dark">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Widget</h2>
            <p class="sml-push-y2 med-push-y3">
              Add our widget to your site. It&rsquo;s a small (but powerful!)
              notice to your site&rsquo;s users that something BIG is happening
              with net neutrality.
            </p>
            <a class="btn btn-block sml-push-y2 med-push-y3" href="#TODO">
              Try it out
            </a>
            <p class="sml-push-y2 med-push-y3">
              Pretty cool, right? Simply add this line of JavaScript to any page
              on your site to join the RED ALERT campaign:
            </p>
            <p>
              TODO: url
            </p>
            <p>
              The widget will appear on your page just like you see it here:
            </p>
            <p>
              TODO: Screenshot
            </p>
            <p>
              If you&rsquo;d like to configure the appearance or change the
              location of the widget on your web pages, just
              <a href="#TODO" target="_blank">visit our GitHub page</a> to learn
              how.
            </p>
            <p>
              Please feel free to create your own custom way to drive awareness
              of this important issue and encourage your users to contact
              Congress. But whatever you do, make sure it&rsquo;s epic. THIS is
              the moment to fight!
            </p>
          </div>
        </div>
      </div>
    </section> -->

<!--     <section id="banner-ads" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Post banner ads on your site</h2>
            <p class="sml-push-y2 med-push-y3">
              Do you run a site or blog? Use the banner ads below to get the
              word out on net neutrality. Or, if you&rsquo;re feeling creative,
              make something yourself and submit it for other sites to use by
              emailing us at
              <a href="mailto:team@fightforthefuture.org">
                team@fightforthefuture.org</a>.
            </p>
            <p>
              TODO: Banner Ad Images
            </p>
          </div>
        </div>
      </div>
    </section> -->

<!--     <section id="social" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Social media</h2>
            <p class="sml-push-y2 med-push-y3">
              If you&rsquo;re active on social media, have a video channel, or
              moderate an online forum, put your small piece of the Internet on
              alert by changing your profile on social media to the images
              below. You can also schedule frequent posts linking to
              <a href="https://www.battleforthenet.com/" target="_blank">
                BattleForThe.Net</a>
              where people can take action.
              <a href="#TODO" target="_blank">Click here</a> to see ideas for
              blog posts, emails, tweets and more.
            </p>
            <p>
              <strong>Avatar Images</strong>
            </p>
            <p>
              TODO: Avatar Images
            </p>
            <p>
              <strong>Facebook Header Images</strong>
            </p>
            <p>
              TODO: Facebook Header Images
            </p>
            <p>
              <strong>Twitter Header Images</strong>
            </p>
            <p>
              TODO: Twitter Header Images
            </p>
            <p>
              <strong>Instagram Story</strong>
            </p>
            <p>
              TODO: Instagram Story Images
            </p>
          </div>
        </div>
      </div>
    </section> -->

    <section id="how" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>How does this work?</h2>
            <p class="sml-push-y2 med-push-y3">
              Simply enter your number above or text
              <strong>HELLO</strong> to <strong>{{ botPhoneNumber }}</strong>
              and respond to a few questions&hellip; it only takes a minute to
            </p>

            <p class="sml-push-y2 med-push-y3">
              Simply enter your number above or text <strong>VOTE</strong> to
              <strong>{{ botPhoneNumber }}</strong> and respond to a few
              questions&hellip; it only takes a minute to complete! Once
              you&rsquo;re done, we&rsquo;ll help you register to vote and give
              you everything you need to get to the polls. In several states,
              your answers submit directly to state online forms for voter
              registration, so there are no paper forms to fill out. In other
              states, we send you a pre-filled form by email or — if you
              don&rsquo;t have a printer — by mail. We include a stamped
              envelope, so to complete your registration you just have to sign
              and mail it.
            </p>
            <p>
              We also provide links to your state&rsquo;s own online
              registration system, if they have one. And as election day
              approaches, we send you all the information you need to vote,
              including your polling location, early voting info, election day
              reminders including a handy calendar invite, voter ID requirements
              &amp; more.
            </p>
            <p>
              Before submitting your registration, we&rsquo;ll give you the
              chance to verify that your information is correct. Do not provide
              false information, as your state may consider that a criminal
              offense. When you&rsquo;re done, we will send you your polling
              location, early voting info, an &ldquo;I&rsquo;m voting&rdquo;
              selfie badge, election day reminders (including a handy calendar
              invite), voter ID requirements, streamlined ways to register to
              vote &amp; more.
            </p>
            <p>
              You can read about our
              <nuxt-link to="/privacy">privacy policy</nuxt-link> or check out
              our <nuxt-link to="/terms">terms of service</nuxt-link>.
              Remember that you&rsquo;re texting, so data &amp; message
              rates may apply. You can text <strong>STOP</strong> to
              <strong>{{ botPhoneNumber }}</strong> any time to stop receiving
              messages.
            </p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>
  </div>
</template>

<script>
import config from '~/config'
import { createMetaTags, smoothScrollToElement } from '~/assets/js/helpers'
import Logo from '~/components/Logo'
import Chat from '~/components/Chat'
import Scoreboard from '~/components/Scoreboard'

export default {
  components: {
    Logo,
    Chat,
    Scoreboard
  },

  head() {
    return {
      title: config.sharing.title,

      script: [
        { src: `https://maps.googleapis.com/maps/api/js?key=${process.env.googleApiKey}&libraries=places` }
      ],

      meta: createMetaTags({
        title: config.sharing.title,
        description: config.sharing.description,
        image: config.sharing.image,
        url: config.sharing.url
      })
    }
  },

  computed: {
    botPhoneNumber() { return config.botPhoneNumber }
  },

  methods: {
    scrollTo(hash) {
      const duration = 500
      smoothScrollToElement(hash, duration)
      // WARNING: Since there is no server a setTimeout is ok. However, with a
      // server this is a dangerous eval. Remove if this project ever is hosted
      // with a JS server.
      setTimeout(() => {
        location.hash = hash
      }, duration)
    }
  }
}
</script>
