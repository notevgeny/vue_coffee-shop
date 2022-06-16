
const goods = {
  state: {
    goods: [
      // {
      //   id: 0,
      //   image: "good-1.jpg",
      //   title: "Solimo Coffee Beans 2kg",
      //   price: 10.73,
      // },
      // {
      //   id: 1,
      //   image: "good-1.jpg",
      //   title: "Presto Coffee Beans 1kg",
      //   price: 15.99,
      // },
      // {
      //   id: 2,
      //   image: "good-1.jpg",
      //   title: "AROMISTICO Coffee 1kg",
      //   price: 6.99,
      // },
      // {
      //   id: 3,
      //   image: "good-1.jpg",
      //   title: "Solimo Coffee Beans 2kg",
      //   price: 10.73,
      // },
      // {
      //   id: 4,
      //   image: "good-1.jpg",
      //   title: "Solimo Beans 12kg",
      //   price: 15.99,
      // },
      // {
      //   id: 5,
      //   image: "good-1.jpg",
      //   title: "Coffee Beans 6kg",
      //   price: 6.99,
      // },
    ],
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