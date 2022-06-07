import { v4 as uuidv4 } from 'uuid';

const coffee = {
  state: {
    coffee: [
      {
        id: uuidv4(),
        img: "coffee-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        img: "coffee-2.jpg",
        title: "Solimo Beans 12kg",
        price: 15.99,
      },
      {
        id: uuidv4(),
        img: "coffee-3.jpg",
        title: "Coffee Beans 6kg",
        price: 6.99,
      },
      {
        id: uuidv4(),
        img: "coffee-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        img: "coffee-2.jpg",
        title: "Solimo Beans 12kg",
        price: 15.99,
      },
      {
        id: uuidv4(),
        img: "coffee-3.jpg",
        title: "Coffee Beans 6kg",
        price: 6.99,
      },
    ],
    text: 'Our coffee'
  },
  getters: {
    getCoffee(state){
      return { coffee: state.coffee, text: state.text }
    }
  }
}

export default coffee