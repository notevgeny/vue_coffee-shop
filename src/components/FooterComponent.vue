<template>
  <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <ul class="footer d-flex flex-wrap">

              <universal-nav
                :link="links.footer.link"
                classItem="footer__item"
              >
                <img :src="require(`@/assets/logo/${links.footer.icon}`)" 
                :alt="links.footer.icon" />
              </universal-nav>


              <universal-nav 
                v-for="link in links.other"
                :key="link.id"
                classItem="footer__item"
                :link="link.link"
                :text="link.text"
                />

            </ul>
          </div>
        </div>
        <img
          class="beanslogo"
          src="@/assets/logo/Beans_logo_dark.svg"
          alt="Beans logo"
        />
      </div>
    </footer>
</template>

<script>
import UniversalNav from '@/components/UniversalNav.vue'

export default {
  components: { UniversalNav },
  computed: {
    links(){
      return this.$store.getters["getFooterLinks"]
    }
  }
}
  
</script>