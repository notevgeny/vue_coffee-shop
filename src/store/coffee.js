
const coffee = {
  state: {
    coffee: [
      // {
      //   id: 0,
      //   image: "coffee-1.jpg",
      //   title: "Solimo Coffee Beans 2kg",
      //   price: 10.73,
      // },
      // {
      //   id: 1,
      //   image: "coffee-2.jpg",
      //   title: "Solimo Beans 12kg",
      //   price: 15.99,
      // },
      // {
      //   id: 2,
      //   image: "coffee-3.jpg",
      //   title: "Coffee Beans 6kg",
      //   price: 6.99,
      // },
      // {
      //   id: 3,
      //   image: "coffee-1.jpg",
      //   title: "Solimo Coffee Beans 2kg",
      //   price: 10.73,
      // },
      // {
      //   id: 4,
      //   image: "coffee-2.jpg",
      //   title: "Solimo Beans 12kg",
      //   price: 15.99,
      // },
      // {
      //   id: 5,
      //   image: 'coffee-3.jpg',
      //   title: "Coffee Beans 6kg",
      //   price: 6.99,
      // },
    ],
    text: 'Our coffee'
  },
  mutations: {
    setCoffeeData(state, data){
      state.coffee = data
    }
  },
  actions: {
    setCoffeeData({commit}, data){
      commit("setCoffeeData", data)
    }
  },
  getters: {
    getCoffee(state){
      return { coffee: state.coffee, text: state.text }
    },
    getCoffeeById(state){
      return (id) => { 
        return state.coffee.find((card) => card.id === +id)
      }
    }
  }
}

export default coffee