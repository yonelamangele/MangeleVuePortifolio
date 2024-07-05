<template>
  <div class="stuff" style="height: 130vh">
    <div class="middle">
      
      <div class="pic">
        <img :src="imgurl" alt="" class="photo">
      </div>

      <div class="par">
        <h4> Hello There. </h4>  
        <h1> <i> I am <b> YONELA MANGELE. </b> </i> </h1> 
        <h4> An aspiring web developer. </h4>
      </div>
    
    </div>

    <div class="links">
      <a href="https://github.com/yonelamangele" target="_blank"> <i class="fa-brands fa-github fa-2x"></i> </a> 
      <a href="https://www.linkedin.com/in/yonela-mangele-125044316/" target="_blank"> <i class="fa-brands fa-linkedin fa-2x"></i> </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      imgurl: 'https://yonelamangele.github.io/Images/20240422_122539.jpg'
    }
  },
  name: 'HomeView',
}
</script>

<style scoped>

@keyframes slide-in-left {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0);
  }
}

.pic {
  animation-name: slide-in-left;
  animation-duration: 6s;
}

@keyframes slide-in-right {
  from {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(0);
  }
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
.links a{
  margin: 5px;
}

/* icons {
  height: ;
}. */
</style>
