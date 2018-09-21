<style lang="scss" scoped>
section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <section>
    <div>
      <Logo />
      <br>
      <SocialShareButtons />
    </div>
  </section>
</template>

<script>
import config from '~/config'
import Logo from '~/components/Logo'
import SocialShareButtons from '~/components/SocialShareButtons'

export default {
  components: {
    Logo,
    SocialShareButtons
  },

  mounted() {
    if (!process.server) {
      const tweet = config.sharing.defaultTweetText.trim()
      location.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
    }
  }
}
</script>
