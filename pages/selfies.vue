<template>
  <div>
    <PageHeader/>

    <div class="site-content">
      <section class="sml-pad-y5">
        <div class="wrapper">
          <div class="sml-c12 med-c9 lrg-c8 grid-center text-center">
            <h2>Selfies for Net Neutrality</h2>
            <p class="sml-push-y2 med-push-y3">
              With hours to go before election day, we built a
              <a href="https://selfie.votefornetneutrality.com/" target="_blank">
                &ldquo;Net neutrality voter&rdquo; selfie tool</a>,
              and we&rsquo;re flooding the Internet with photos and stories from
              people across the country who plan to #VoteForNetNeutrality.
              Thousands have already posted theirs, including hundreds of first
              time voters from all 50 states. Here&rsquo;s a sampling.
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
