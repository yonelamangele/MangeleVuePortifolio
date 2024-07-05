<template>
    <h1> My Projects </h1>
    <projects-comp>
        <template #projectSlot>
            <section>

                <div class="stuff" v-for="project in projects()" :key="project">
                    <div class="row row-cols-1 row-cols-md-2 g-4 card-proj">
                        <div class="col">
                            <div class="card">
                                <img :src="project.image" class="card-img-top" alt="">
                                <div class="card-body">
                                    <h2 class="card-title"> <u> {{ project.name }} </u> </h2>
                                    <p class="card-text"> {{ project.description }} </p>
                                    <a :href="project.github" class="btn btn-primary" target="_blank"> Github </a> |
                                    <a :href="project.vercel" class="btn btn-primary" target="_blank"> Live </a>
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
import ProjectsComp from '@/components/ProjectsComp.vue'
export default {

    components:{
        ProjectsComp
    },
    methods:{
        projects(){
            return this.$store.state.projects
        }
    },
    computed:{
        getProjects() {
            return this.$store.dispatch('getProjects')
        }
    },
    mounted(){
        this.getProjects
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
    height: 50vh
}


</style>