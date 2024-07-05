<template>
     <h1> My Testimonials </h1>
    <projects-comp>
        <template #testimonialSlot>
            <section>

                <div class="stuff" v-for="testimonial in testimonials()" :key="testimonial">
                    <div class="row row-cols-1 row-cols-md-2 g-4 card-proj">
                        <div class="col">
                            <div class="card">
                                <img :src="testimonial.image" class="card-img-top" alt="">
                                <div class="card-body" id="hei">
                                    <h2 class="card-title"> <u> {{ testimonial.name }} </u> </h2>
                                    <p class="card-text"> {{ testimonial.message }} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </template>
    </projects-comp>
</template>
<script>
import ProjectsComp from '@/components/ProjectsComp.vue';
export default {
  components:{
        ProjectsComp
    },
    methods:{
        testimonials(){
            return this.$store.state.testimonials
        }
    },
    computed:{
        getTestimonials() {
            return this.$store.dispatch('getTestimonials')
        }
    },
    mounted(){
        this.getTestimonials
    }
}
</script>
<style scoped>
    .card {
    background-color: #4542DD;
    color: white;
}

.col {
    width: 242.66px;
    height: 326.61px
}

.card {
    width: 218.66px;
    height: 326.61px;
    border-radius: 20px;
}

.card-img-top {
    width: 217.06px;
    height: 135.41px;
}

a {
    
    text-decoration: none;

}

a:hover {
    color: aqua;
}

section  {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    place-items: center;
    margin-top: 80px;
}

.stuff {
    height: 60vh
}
    .card {
      height: 420px;
    }

    .card-img-top {
      height: 200px;
    }
</style>