<template>
  <div>
    <nuxt/>

    <PageFooter/>

    <Modal>
      <ArchivedModal v-if="modalType === 'archived'"/>
    </Modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PageFooter from '~/components/PageFooter'
import Modal from '~/components/Modal'
import ArchivedModal from '~/components/ArchivedModal'

export default {
  components: {
    PageFooter,
    Modal,
    ArchivedModal
  },

  computed: {
    ...mapState(['modalType', 'modalData'])
  }
}
</script>
