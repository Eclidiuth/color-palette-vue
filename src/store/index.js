import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colorPalettes: [
      {
        name: 'bs-gray',
        palette: [
          // {
          //   color: "ffffff",
          //   memo: "white"
          // },
          {
            color: "f8f9fa",
            memo: "gray-100"
          },
          {
            color: "e9ecef",
            memo: "gray-200"
          },
          {
            color: "dee2e6",
            memo: "gray-300"
          },
          {
            color: "ced4da",
            memo: "gray-400"
          },
          {
            color: "adb5bd",
            memo: "gray-500"
          },
          {
            color: "6c757d",
            memo: "gray-600"
          },
          {
            color: "495057",
            memo: "gray-700"
          },
          {
            color: "343a40",
            memo: "gray-800"
          },
          {
            color: "212529",
            memo: "gray-900"
          },
          {
            color: "000000",
            memo: "black"
          },
        ]
      },
      {
        name: 'Color',
        palette: [
          {
            color: "007bff",
            memo: "blue"
          },
          {
            color: "6610f2",
            memo: "indigo"
          },
          {
            color: "6f42c1",
            memo: "purple"
          },
          {
            color: "e83e8c",
            memo: "pink"
          },
          {
            color: "dc3545",
            memo: "red"
          },
          {
            color: "fd7e14",
            memo: "orange"
          },
          {
            color: "ffc107",
            memo: "yellow"
          },
          {
            color: "28a745",
            memo: "green"
          },
          {
            color: "20c997",
            memo: "teal"
          },
          {
            color: "17a2b8",
            memo: "cyan"
          },
        ]
      }
    ]
  },
  getters: {
    colorPalettes: state => state.colorPalettes
  },
  mutations: {
    colorPalettes: (state, payload) => state.colorPalettes = payload
  },
  actions: {
    addNewColor({ commit, getters }, payload){
      const palette = getters.colorPalettes
      const paletteIndex = palette.findIndex(el => el.name === payload.paletteName)

      palette[paletteIndex].palette.push({
        color: payload.paletteColor
      })

      commit('colorPalettes', palette)
    },
    updatecolorPalettes: ({ commit }, payload) => commit('colorPalettes', payload)
  },
})
