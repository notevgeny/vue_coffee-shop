<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <navbar-component />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h1 class="title-big">Everything You Love About Coffee</h1>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <router-link to="/" class="preview__btn">More</router-link>
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <!-- <product-item/>
              <product-item/>
              <product-item/> -->
              <!-- <div class="best__item">
                <img src="@/assets/img/coffee-1.jpg" alt="coffee" />
                <div class="best__item-title">Solimo Coffee Beans 2kg</div>
                <div class="best__item-price">10.73$</div>
              </div>
              <div class="best__item">
                <img src="@/assets/img/coffee-2.jpg" alt="coffee" />
                <div class="best__item-title">Presto Coffee Beans 1kg</div>
                <div class="best__item-price">15.99$</div>
              </div>
              <div class="best__item">
                <img src="@/assets/img/coffee-3.jpg" alt="coffee" />
                <div class="best__item-title">AROMISTICO Coffee 1kg</div>
                <div class="best__item-price">6.99$</div>
              </div> -->
              <product-item
                classItem="best__item" 
                :title="best[0].title" 
                :price="best[0].price"
                :image="best[0].img"
              />
              <product-item
                classItem="best__item"
                :title="best[1].title" 
                :price="best[1].price"
                :image="best[1].img"
              />
              <product-item
                classItem="best__item"
                :title="best[2].title" 
                :price="best[2].price"
                :image="best[2].img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import ProductItem from '@/components/ProductItem.vue'


export default {
  components: { NavbarComponent, ProductItem },
  data(){
    return {
      best: [
        {
          id: 0,
          title: 'Solimo Coffee Beans 2kg',
          price: 10.73,
          img: 'coffee-1.jpg',
        },
        {
          id: 1,
          title: 'Presto Coffee Beans 1kg',
          price: 15.99,
          img: 'coffee-2.jpg',
        },
        {
          id: 2,
          title: 'AROMISTICO Coffee 1kg',
          price: 6.99,
          img: 'coffee-3.jpg',
        }
      ]
    }
  }
};

</script>