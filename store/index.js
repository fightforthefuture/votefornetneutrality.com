import Vuex from 'vuex'
import config from '~/config'

const createStore = () => {
  return new Vuex.Store({
    state: {
      donateURL: config.donateURL,
      joinURL: config.joinURL,
      volunteerURL: config.volunteerURL,
      modalVisible: false,
      modalType: null,
      zipCode: null,
      phone: null
    },
    mutations: {
      setModalVisibility(state, value) {
        state.modalVisible = value
      },

      setModalType(state, value) {
        state.modalType = value
      },

      setZipCode(state, value) {
        state.zipCode = value
      },

      setPhone(state, value) {
        state.phone = value
      }
    }
  })
}

export default createStore
