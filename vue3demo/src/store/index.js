import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    count:1
  },
  mutations: {
    inc(state){
      state.count++;
    }
  },
  actions: {
  },
  modules: {
  }
});
