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
  data() {
    return {
      links: {
        header: {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        other: [
        {
          id: 1,
          text: "Our coffee",
          link: "/our-coffee",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/goods",
        },
        {
          id: 3,
          text: "Contact us",
          link: "/contacts",
        },
      ],
      }
    };
  },
};
</script>
  
