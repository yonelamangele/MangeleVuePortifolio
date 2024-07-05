<template>
    <h1> My Resume </h1>
    <projects-comp>
        <template #resumeSlot>
            <section>

                <div class="stuff" v-for="info in resume()" :key="info">
                    <div class="edu">
                        <div class="lc">
                            <img :src="info.image" alt="">
                            <h3> <b> <i> {{ info.placeOfInstitution }} </i> </b> </h3>
                            <h4> {{ info.year }} </h4>
                            <p> {{ info.description }} </p>
                        </div>
                    </div>
                </div>
                
            </section>
                
                <div class="stone">
                    <div class="skills" v-for="skill in skills()" :key="skill">
                        <div class="edu1">
                            <div class="html">
                                <h3> <b> <i> {{ skill.name }} </i> </b> </h3>
                                <img :src="skill.image" alt="" id="senku">
                            </div>
                        </div>
                    </div>
                </div>


        </template>
    </projects-comp>
</template>
<script>
import ProjectsComp from '@/components/ProjectsComp.vue'
export default {
    components: {
        ProjectsComp
    },
    methods:{
        resume(){
            return this.$store.state.resume
        },
        skills() {
            return this.$store.state.skills
        }
    },
    computed:{
        getResume() {
            return this.$store.dispatch('getResume')
        },
        getSkills() {
            return this.$store.dispatch('getSkills')
        }
    },
    mounted(){
        this.getResume
        this.getSkills
    }
    
}
</script>
<style scoped>
    * {
        color: white;
    }
    section {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    place-items: center;
    margin-top: 80px;
    }
    .stuff {
    height: 60vh
    }
    .lc {
        height: 342.06px;
        align-content: center;
    }
    #senku {
        height: 200px;
    }
    .stone {
        display: flex;
        place-content: center;
        align-content: space-evenly;
    }
</style>