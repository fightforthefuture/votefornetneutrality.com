<template>
  <div class="text-center sml-push-y2">
    <div class="wrapper">
      <div class="row">
        <div class="sml-c12 lrg-c8 grid-center text-center">
          <h2>Show your support for Net Neutrality</h2>
          <p class="sml-push-y2 med-push-y3">
            The FCC officially gutted the open internet, allowing your cable company
            to scam you for more money, censor websites, and slow down online content.
            By electing Senators and Representatives who support net neutrality, we
            can reverse the FCC’s decision and enshrine net neutrality protections
            into law. Use these great profile pictures and banner ads to spread the
            word!
          </p>
        </div> <!-- .c -->
      </div> <!-- .row -->
    </div> <!-- .wrapper -->

    <SocialMedia/>
    <BannerAds class="sml-push-y4 med-push-y6"/>
    <LawnSigns class="sml-push-y4 med-push-y6"/>
  </div>
</template>

<script>
import SocialMedia from '~/components/SocialMedia'
import BannerAds from '~/components/BannerAds'
import LawnSigns from '~/components/LawnSigns'

export default {
  layout: 'page',

  components: {
    SocialMedia,
    BannerAds,
    LawnSigns
  }
}
</script>
