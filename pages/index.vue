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

    <section id="plan" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Here&rsquo;s the Plan</h2>
            <p class="sml-push-y2 med-push-y3">
              The FCC killed net neutrality. But Congress can still restore it using
              The Congressional Review Act (CRA).  So we&rsquo;re telling our elected
              officials: sign the discharge petition to restore net neutrality, or face
              the wrath of the Internet on Election Day. Here&rsquo;s what we're doing:
            </p>
            <ul class="fancy-bullets">
              <li>
                Registering as many net neutrality supporters to vote for the
                first time as possible. Tell everyone to text
                <strong>VOTE</strong> to <strong>{{ botPhoneNumber }}</strong>
                to get started. (Message and data rates apply, reply
                <strong>STOP</strong> to opt out.)
              </li>
              <li>
                Educating first-time and non voters about where their candidates
                stand with our updated Vote for Net Neutrality
                <a href="#scoreboard" @click.prevent="scrollTo('#scoreboard')">scorecard</a>.
              </li>
              <li>
                Mobilizing
                <a :href="$store.state.volunteerURL" target="_blank">volunteers</a>
                across the Internet to text voters in key districts where our
                pressure calling for lawmakers to act can have the most impact.
              </li>
              <li>
                Recruiting
                <a href="#join" @click.prevent="scrollTo('#join')">local action teams</a>
                to organize protests, pass out lawn signs, and do voter
                education at the polls in key districts.
              </li>
              <li>
                Spreading the word. <a href="#social" @click.prevent="scrollTo('#social')">Click here to find</a> Vote for
                Net Neutrality tweets, social media materials, graphics, and more.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Scoreboard/>

    <section id="join" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>Join a local<br>action group</h2>
            <p class="sml-push-y2 med-push-y3">
              We&rsquo;ve created Facebook groups so that people all across
              America can organize protests, pass out lawn signs, and help
              educate voters at the polls in key districts.  There are many
              different ways to to help out in a lot of important races, so join
              a local action group today!
            </p>
            <p class="sml-push-y2">
              <img src="https://data.battleforthenet.com/events.png" alt="A map of net neutrality Facebook Groups" class="is-rounded">
            </p>
            <div class="facebook-groups sml-push-y2">
              <a v-for="group in facebookGroups"
                :key="group.url"
                :href="group.url"
                target="_blank"
                class="btn btn-hollow text-ellipsis">
                {{ group.address }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <SocialMedia :show-all="false"/>

    <BannerAds :show-all="false"/>

    <section id="how" class="sml-pad-y2 med-pad-y4">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center text-center">
            <h2>How does VoteBot work?</h2>
            <p class="sml-push-y2 med-push-y3">
              Simply enter your number above or text <strong>VOTE</strong> to
              <strong>{{ botPhoneNumber }}</strong> and respond to a few
              questions. First, we'll look up your voter registration status 
              using Target Smart, a secure service.  If you are not registered to vote, 
              we will direct you to Turbo Vote so you can make sure you are ready to 
              participate in the 2018 elections.
            </p>
            <p>
              Next, we'll let you know who is running for the US Senate and the US 
              House of Representatives in your district using Google Civic Information.  
              We'll also tell you which candidates support or opppose net neutrality 
              based on information compiled by Fight for the Future and Common Cause.  
              We encourage you to contact these candidates and let them know you want 
              them to support net neutrality before the election.
            </p>
            <p>
              Remember that you&rsquo;re texting with Vote Bot, so data &amp; message
              rates may apply. You can text <strong>STOP</strong> to
              <strong>{{ botPhoneNumber }}</strong> any time to stop receiving
              messages.
            </p>
            <p>
              Please be aware that the services we use are not always 100% accurate.
              You may be registered to vote even if our system says otherwise. And
              in some rare cases, Congressional districts have been recently changed
              and the Google Civic Information API hasn't been updated. If you find
              an error, you can let us know by emailing 
              <a href="mailto:team@fightforthefuture.org">team@fightforthefuture.org</a>.
              We'll try to fix it if we can.
            </p>
          </div> <!-- .c -->
        </div> <!-- .row -->
      </div> <!-- .wrapper -->
    </section>

    <Modal>
      <CallModal v-if="modalType === 'call'"/>
      <WriteModal v-if="modalType === 'write'"/>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'
import config from '~/config'
import facebookGroups from '~/data/facebook-groups.json'
import { createMetaTags, smoothScrollToElement } from '~/assets/js/helpers'
import Logo from '~/components/Logo'
import Chat from '~/components/Chat'
import Scoreboard from '~/components/Scoreboard'
import SocialMedia from '~/components/SocialMedia'
import BannerAds from '~/components/BannerAds'
import Modal from '~/components/Modal'
import CallModal from '~/components/CallModal'
import WriteModal from '~/components/WriteModal'

export default {
  components: {
    Logo,
    Chat,
    Scoreboard,
    SocialMedia,
    BannerAds,
    Modal,
    CallModal,
    WriteModal
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
    botPhoneNumber() { return config.botPhoneNumber },
    modalType () { return this.$store.state.modalType },
    facebookGroups () { return facebookGroups }
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
