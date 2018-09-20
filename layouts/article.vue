<template>
  <div>
    <section class="sml-pad-y2 med-pad-y4 text-center">
      <div class="wrapper">
        <div class="row">
          <div class="sml-c12 lrg-c8 grid-center article text-center">
            <Logo/>
            <nuxt/>
          </div>
        </div>
      </div>
    </section>
    <PageFooter/>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import PageFooter from '~/components/PageFooter'
import { createMetaTags } from '~/assets/js/helpers'

export default {
  components: {
    Logo,
    PageFooter
  },

  head() {
    return {
      meta: createMetaTags({
        title: config.sharing.title,
        description: config.sharing.description,
        image: config.sharing.image,
        url: config.sharing.url
      })
    }
  },
}
</script>
