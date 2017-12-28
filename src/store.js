import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    presenterListView: true,
    presenterList: [
      {name: 'Alice', id: 1, routeKebab: 'alice-jones'},
      {name: 'Jerry', id: 2, routeKebab: 'jerry-dumbo'},
      {name: 'Doug', id: 3, routeKebab: 'doug-hip'},
      {name: 'Bert', id: 4, routeKebab: 'bert-namesucks'}
    ],
    currentPresenterId: Number
  },
  mutations: {
    selectCurrentPresenter (state, id) {
      state.presenterListView = false
      state.currentPresenterId = id
    }
  },
  actions: {
    routeHelper ({state, commit, dispatch}) {
      console.log('helper to the rescue!')
      let route = this.$router
      console.log(route, 'route')
      let presenter = state.presenterList.filter()
    }
  }
})