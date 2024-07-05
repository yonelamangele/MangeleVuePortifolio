<template>
  <navbar-comp/>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  background: linear-gradient(#252533, #27263C, #2D2C66, #302E78, #2F2D73, #4542DD, #302E78, #302E78)
}

a {
  color: white;
  font-weight: bold
}


</style>


<script>
import NavbarComp from './components/NavbarComp.vue'
export default {
  components:{
    NavbarComp
  }
}
</script>



<!-- github link - https://github.com/yonelamangele -->

<!-- linkedin link - https://www.linkedin.com/in/yonela-mangele-125044316/ -->

<!-- html icon - <i class="fa-brands fa-html5"></i> -->

<!-- css icon - <i class="fa-brands fa-css3-alt"></i> -->

<!-- javascript - <i class="fa-brands fa-js"></i> -->

<!-- vuejs - <i class="fa-brands fa-vuejs"></i> -->

