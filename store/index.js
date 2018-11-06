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
      modalData: null,
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

      setModalData(state, value) {
        state.modalData = value
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
        if (state.selfies === null) {
          state.selfies = value
        } else {
          state.selfies.data = state.selfies.data.concat(value.data)
          state.selfies.pages = value.pages
        }
      }
    },
    actions: {
      async getSelfies({ commit, state }, pageNum) {
        try {
          const { data } = await axios.get(`https://data.battleforthenet.com/vfnn/selfies-page${pageNum}.json`)
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
