import Vuex from 'vuex'
import config from '~/config'

const createStore = () => {
  return new Vuex.Store({
    state: {
      donateURL: config.donateURL,
      joinURL: config.joinURL,
      volunteerURL: config.volunteerURL,
      anPetitionId: config.actionNetworkPetitonId,
      mapboxToken: config.mapboxToken,
      modalVisible: false,
      modalType: null,
      zipCode: null,
      phone: null,
      map: {
        zoom: null,
        currentPin: null
      }
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
      },

      setMapZoom(state, value) {
        state.map.zoom = value
      },

      setMapCurrentPin(state, value) {
        state.map.currentPin = value
      }
    }
  })
}

export default createStore
