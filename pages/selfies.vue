<template>
  <div>
    <PageHeader/>

    <div class="site-content">
      <section class="sml-pad-y5">
        <div class="wrapper">
          <div class="sml-c12 med-c9 lrg-c8 grid-center text-center">
            <h2>Selfies for Net Neutrality</h2>
            <p class="sml-push-y2 med-push-y3">
              Over 2,000 people have already submitted selfies for Net Neutrality.
              <a href="https://selfie.votefornetneutrality.com/" target="_blank">
                 Take yours here!</a>
              These photos put faces to just some of the millions of people who have
              taken action on this issue over the past year by contacting their
              members of Congress, participating in an in-district meeting with
              lawmakers and staff, attending a protest, or volunteering to do mass
              voter education.
            </p>

            <p>
              For press inquiries, please contact us at:
              <a href="tel://9788526457">978-852-6457</a> or
              <a href="mailto:press@fightforthefuture.org">
                press@fightforthefuture.org</a>
            </p>
          </div> <!-- .c -->

          <SelfieGrid/>
        </div> <!-- .wrapper -->
      </section>
    </div> <!-- .site-content -->
  </div>
</template>

<script>
import config from '~/config'
import { createMetaTags } from '~/assets/js/helpers'
import PageHeader from '~/components/PageHeader'
import SelfieGrid from '~/components/SelfieGrid'

export default {
  layout: 'skeleton',

  head() {
    return {
      title: `${config.sharing.title} - Selfies`,
      meta: createMetaTags({
        title: config.sharing.title,
        description: config.sharing.description,
        image: config.sharing.image,
        url: config.sharing.url
      }),
      bodyAttrs: {
        class: 'full-width'
      }
    }
  },

  components: {
    PageHeader,
    SelfieGrid
  }
}
</script>
