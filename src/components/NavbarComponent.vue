<template>
  <header>
    <ul
      class="
        header
        d-flex
        justify-content-center justify-content-md-start
        flex-wrap
      "
    >
      <universal-nav
        :link="links.header.link"
        classItem="header__item"
      >
        <img
            :src="require(`@/assets/logo/${links.header.icon}`)"
            :alt="links.header.icon"
        />
      </universal-nav>

      <universal-nav
        v-for="link in links.other"
        :key="link.id"
        classItem="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
import UniversalNav from "@/components/UniversalNav.vue";

export default {
  components: { UniversalNav },
  computed: {
    links(){
      return this.$store.getters["getHeaderLinks"]
    }
  }
};
</script>
  
