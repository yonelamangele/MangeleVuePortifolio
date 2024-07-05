<template>
    <nav>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <img :src="logoUrl" alt="ym" class="logo"/>
                <li class="nav-item">
                    <router-link to="/"> Home </router-link> 
                </li>

                <li class="nav-item">     
                    <router-link to="/about"> About </router-link> 
                </li>
                
                <li class="nav-item">
                    <router-link to="/resume"> Resume </router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/projects"> Projects </router-link>
                </li>
                
                <li class="nav-item">
                    <router-link to="/testimonials"> Testimonials </router-link>
                </li>
                
                <li class="nav-item">
                    <router-link to="/contacts"> Contacts </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
      return{
        logoUrl: 'https://yonelamangele.github.io/YMvueportifolio/src/imgs/Yonela-removebg-preview.png'
      };
    },
};
</script>

<style>
 li {
        list-style-type: none;
    }

    .navbar-nav {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        align-items: center;
        padding-right: 60px;
    }

    .logo {
      height: 100px;
      width: 100px;
      animation: zoom-in-out 4s infinite
    }

    @keyframes zoom-in-out {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(2);
      }

      100% {
        transform: scale(1);
      }
    }

</style>