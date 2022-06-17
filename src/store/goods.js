
const goods = {
  state: {
    goods: [],
    text: 'For your pleasure'
  },
  mutations: {
    setGoodsData(state, data){
      state.goods = data
    }
  },
  actions: {
    setGoodsData({commit}, data){
      commit("setGoodsData", data)
    }
  },
  getters: {
    getGoods(state){
      return { goods: state.goods, text: state.text }
    },
    getGoodsById(state){
      return (id) => { 
        return state.goods.find((card) => card.id === +id)
      }
    }
  }
}

export default goods