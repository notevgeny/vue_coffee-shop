import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from "../views/HeroView"
import OurCoffeeView from "../views/OurCoffeeView"
import GoodsView from "../views/GoodsView"
import ThanksView from "../views/ThanksView"
import ContactsView from "../views/ContactsView"
import ProductItemView from "../views/ProductItemView"

Vue.use(VueRouter)

 
const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/goods', component: GoodsView },
  { path: '/contacts', component: ContactsView },
  { path: '/thanks', component: ThanksView },
  { name: 'coffee', path: '/our-coffee/:id', component: ProductItemView},
  { name: 'goods', path: '/goods/:id', component: ProductItemView}
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
}) 


export default router