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
      isArchived: config.isArchived,
      modalVisible: config.isArchived ? true : false,
      modalType: config.isArchived ? "archived" : null,
      modalData: null,
      zipCode: null,
      phone: null,
      map: {
        zoom: null,
        currentPin: null
      },
      selfies: null,
      selfiesCurPageNum: 1
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
        state.selfies = value
        state.selfiesCurPageNum = 1
      },

      addSelfies(state, value) {
        state.selfies.data = state.selfies.data.concat(value.data)
        state.selfies.pages = value.pages
      },

      setSelfiesCurPageNum(state, value) {
        state.selfiesCurPageNum = value
      },
    },
    actions: {
      async getSelfies({ commit, state }, query) {
        let q = ''
        if (query && query.page) {
          q = `-page${query.page}`
        } else if (query && query.state) {
          q = `-${query.state}`
        }

        try {
          const { data } = await axios.get(`https://data.battleforthenet.com/vfnn/selfies${q}.json`)
          if (query && query.page > 1) {
            commit('addSelfies', data)
          } else {
            commit('setSelfies', data)
          }
        }
        catch (error) {
          console.log("Something went wrong with fetching the selfies")
        }
      }
    }
  })
}

export default createStore
