const bestsellers = {
  state: {
    bestsellers: [
      // {
      //   id: 0,
      //   title: "Solimo Coffee Beans 2kg",
      //   price: 10.73,
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: 1,
      //   title: "Presto Coffee Beans 1kg",
      //   price: 15.99,
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: 2,
      //   title: "AROMISTICO Coffee 1kg",
      //   price: 6.99,
      //   image: "coffee-3.jpg",
      // },
    ],
  },
  mutations: {
    setPopularData(state, data){
      state.bestsellers = data
    }
  },
  actions: {
    setPopularData({commit}, data){
      commit("setPopularData", data)
    }
  },
  getters: {
    getBestsellers(state){
      return state.bestsellers
    }
  }
  
}

export default bestsellers