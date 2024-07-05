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

  .par {
  animation-name: slide-in-right;
  animation-duration: 6s;
}

.nav-link {
  color: white;
}


.pic {
  height: 400px;
  width: 300px
}
.photo {
  height: 400px;
  width: 300px;
  border-radius: 10px;
  
}

.par {
  height: 400px;
  color: white;
  align-content: center;
}

.middle {
    margin: 5ch;
    height: 400px;
    display: flex;
    justify-content: space-evenly;
}
</style>