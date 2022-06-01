<template>

      <li :class="classItem">
        <router-link :to="link">{{text}}</router-link>
      </li>

</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false, 
    },
    icon: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    classItem: {
      type: String,
      required: true
    }
  },
}
  
</script>
  
