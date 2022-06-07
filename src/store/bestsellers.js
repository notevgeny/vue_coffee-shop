import { v4 as uuidv4 } from "uuid";

const bestsellers = {
  state: {
    bestsellers: [
      {
        id: uuidv4(),
        title: "Solimo Coffee Beans 2kg",
        price: 10.73,
        img: "coffee-1.jpg",
      },
      {
        id: uuidv4(),
        title: "Presto Coffee Beans 1kg",
        price: 15.99,
        img: "coffee-2.jpg",
      },
      {
        id: uuidv4(),
        title: "AROMISTICO Coffee 1kg",
        price: 6.99,
        img: "coffee-3.jpg",
      },
    ],
  },
  getters: {
    getBestsellers(state){
      return state.bestsellers
    }
  }
  
}

export default bestsellers