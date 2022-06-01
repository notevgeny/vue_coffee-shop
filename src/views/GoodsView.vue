<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <navbar-component />
          </div>
        </div>
        <page-title :text='text'/>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <div class="shop__wrapper">
                <product-item
                  classItem="shop__item"
                  :title="goods[0].title" 
                  :price="goods[0].price"
                  :image="goods[0].img"
                />
                <product-item
                  classItem="shop__item"
                  :title="goods[1].title" 
                  :price="goods[1].price"
                  :image="goods[1].img"
                />
                <product-item
                  classItem="shop__item"
                  :title="goods[2].title" 
                  :price="goods[2].price"
                  :image="goods[2].img"
                />
                <product-item
                  classItem="shop__item"
                  :title="goods[3].title" 
                  :price="goods[3].price"
                  :image="goods[3].img"
                />
                <product-item
                  classItem="shop__item"
                  :title="goods[4].title" 
                  :price="goods[4].price"
                  :image="goods[4].img"
                />
                <product-item
                  classItem="shop__item"
                  :title="goods[5].title" 
                  :price="goods[5].price"
                  :image="goods[5].img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import ProductItem from "@/components/ProductItem.vue";
import PageTitle from '@/components/PageTitle.vue'

export default {
  components: { NavbarComponent, ProductItem, PageTitle },
  data() {  
    return {
      goods: [
        {
          id: 0,
          img: "coffee-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
        },
        {
          id: 1,
          img: "coffee-2.jpg",
          title: "Solimo Beans 12kg",
          price: 15.99,
        },
        {
          id: 2,
          img: "coffee-3.jpg",
          title: "Coffee Beans 6kg",
          price: 6.99,
        },
        {
          id: 3,
          img: "coffee-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
        },
        {
          id: 4,
          img: "coffee-2.jpg",
          title: "Solimo Beans 12kg",
          price: 15.99,
        },
        {
          id: 5,
          img: "coffee-3.jpg",
          title: "Coffee Beans 6kg",
          price: 6.99,
        },
      ],
      text: 'For your pleasure'
    };
  },
};
</script>