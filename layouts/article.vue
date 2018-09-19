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

export default {
  components: {
    Logo,
    PageFooter
  }
}
</script>
