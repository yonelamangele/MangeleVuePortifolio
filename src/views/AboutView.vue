<template>
  <div class="stuff" :style="{height: '130vh'}">
    <div class="middle">
      <div class="pic">
        <img :src="imgurl" alt="" class="photo">
      </div>
      <div class="par">
        <h1> <b> <u> About Me </u> </b> </h1> 
        <p> {{ aboutMe }} </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      imgurl: 'https://yonelamangele.github.io/Images/20240123_201043.jpg',
    }
  },
    methods: {
      
    },
    computed: {
      aboutMe(){
        return this.$store.state.aboutMe
      }
    },
    mounted() {
      
       this.$store.dispatch('getAboutMe')
      }
      
    }

</script>

<style>
  .stuff {
    color: white
  }
</style>