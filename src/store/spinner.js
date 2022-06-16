const isLoading = {
  state: {
    isLoading: false
  },
  actions: {
    setIsLoading({commit}, value){
      commit("setIsLoading", value)
    }
  },
  mutations: {
    setIsLoading(state, value){
      state.isLoading = value
    }
  },
  getters: {
    getIsLoading(state){
      return state.isLoading
    }
  }
}

export default isLoading