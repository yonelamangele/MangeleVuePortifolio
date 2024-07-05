<template>
    <div class="stuff" style="height: 130vh">
        <div class="heading text-center">
        <h1> <u> <b> Testimonials </b> </u> </h1>
      </div>
      
      <div class="container mt-5">
        <div class="row">
          
          <div class="col">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://yonelamangele.github.io/Images/20240422_121810.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"> Taahir Du Toit </h5>
                    <p class="card-text"> They say you should surround yourself with qualities of success and i believe Yonela has all of them. He is always radiating positivity. He is hard-working and works great with others. He questions where he is unsure but makes sure his due diligence before hand. </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
          <div class="col">
                <div class="card mb-3" style="max-width: 540px;">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://yonelamangele.github.io/Images/20240422_121658.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title"> Sihlandlo Makhumsha </h5>
                        <p class="card-text"> Yonela, a humble brother, very committed in meeting deadlines. Doesn't talk too much, you just give him a PC and see MAGIC happening just right before your eyes. </p>
                      </div>
                    </div>
                  </div>
                </div>

          </div>

        </div>

      </div>
        
      <div class="container mt-5">

        <div class="row">
          
          <div class="col">

            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://yonelamangele.github.io/Images/20240422_120408.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"> Kiara Adams </h5>
                    <p class="card-text"> Yonela is the epitome of hard work; his dedication and perseverance are truly inspiring. He has a welcoming demeanor and genuine interest in others that create a warm atmosphere around him, luring people in. Despite his quiet demeanor, Yonela's presence speaks volumes in our class. His thoughtful insights and peaceful presence enrich our discussions and create a calm learning environment. </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          <div class="col">

            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://yonelamangele.github.io/Images/20240422_121001.jpg" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title"> Ntando Mabuto </h5>
                    <p class="card-text"> Yonela is a very commited person and his commitment leads to great success. He is also approachable and a good teamplayer. </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div class="container mt-5">

          <div class="row">
            
            <div class="col">
  
              <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://yonelamangele.github.io/Images/20240422_120221.jpg" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title"> Marcus Adonis </h5>
                      <p class="card-text"> Quiet and humble person but enjoys the company of people. Works hard and as a lot of good ideas that are flexible that works well within a team. </p>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      <div class="container mt-5">

          <div class="row">
            
            <div class="col">
  
              <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="https://yonelamangele.github.io/YMvueportifolio/src/imgs/20240422_120221.jpg" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title"> Siphokuhle Nyana </h5>
                      <p class="card-text"> Yonela has a unique ability to approach complex problems with a clear and level head, always finding creative solutions that benefit the project and the team. Their communication skills are outstanding,one of Yonela Mangele’s greatest strengths is their ability to work well under pressure. They remain calm and focused, even in the most challenging situations, and their positivity is contagious.I have learned so much from him and appreciate the support and guidance they have provided me during our time working together. I highly recommend Yonela to anyone looking for a talented and dedicated professional. </p>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
      testimonials(){
        return this.$store.state.testimonials
      }
    },
    mounted() {
       this.$store.dispatch('testimonials')
      }
}
</script>
<style>
    
</style>