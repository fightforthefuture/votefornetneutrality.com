<template>
  <div>
    <h2>Show your support for Net Neutrality</h2>
    <p>
      The FCC officially gutted the open internet, allowing your cable company
      to scam you for more money, censor websites, and slow down online content.
      By electing Senators and Representatives who support net neutrality, we
      can reverse the FCC’s decision and enshrine net neutrality protections
      into law. Use these great profile pictures and banner ads to spread the
      word!
    </p>

    <SocialMedia/>
  </div>
</template>

<script>
import SocialMedia from '~/components/SocialMedia'

export default {
  layout: 'article',

  components: {
    SocialMedia
  }
}
</script>
