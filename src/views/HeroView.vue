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

            <a
              href="/our-coffee"
              class="preview__btn"
              @click.prevent="smoothScroll"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </div>
    <section class="about" id="about" ref="about">
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
        <div class="title" ref="ourBest">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <spinner-component v-if="isLoading"></spinner-component>
            <div class="best__wrapper" v-else>

              <product-item 
                v-for="card in bestsellers"
                :key="card.id"
                classItem="best__item"
                :card="card"
              />
              
              
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
import { scrollIntoView } from "seamless-scroll-polyfill";
import SpinnerComponent from '@/components/SpinnerComponent.vue'
import {spinner} from '../mixins/spinner'

export default {
  components: { NavbarComponent, ProductItem, SpinnerComponent },
  
  computed: {
    bestsellers(){
      return this.$store.getters["getBestsellers"]
    },
    
  },
  mixins: [spinner],
  
  methods: {
    smoothScroll() {
      scrollIntoView(this.$refs.ourBest, {
        behavior: "smooth",
        block: "start",
      });
    },
  },
  // beforeMount(){
  //   this.$store.dispatch("setIsLoading", true)

  //   setTimeout(() => {
  //     this.$store.dispatch("setIsLoading", false)
  //   }, 1500)

  // },
  mounted(){
    fetch('http://localhost:3000/bestsellers')
    .then(response => response.json())
    .then(data => {
      this.$store.dispatch("setPopularData", data)
    })
  }
};
</script>