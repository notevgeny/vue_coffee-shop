export const spinner = {
  computed: {
    isLoading(){
      return this.$store.getters["getIsLoading"]
    }
  },
    beforeMount(){
      this.$store.dispatch("setIsLoading", true)
    
      setTimeout(() => {
        this.$store.dispatch("setIsLoading", false)
      }, 1000)
  }

    
  
}

