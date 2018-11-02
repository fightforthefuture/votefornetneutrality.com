import Vuex from 'vuex'
import axios from 'axios'
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
      },
      selfies: null
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
      },

      setSelfies(state, value) {
        state.selfies = value
      }
    },
    actions: {
      async getSelfies({ commit, state }) {
        try {
          const { data } = await axios.get('https://data.battleforthenet.com/vfnn/selfies.json')
          commit('setSelfies', data)
        }
        catch (error) {
          console.log("Something went wrong with fetching the selfies")
        }
      }
    }
  })
}

export default createStore
