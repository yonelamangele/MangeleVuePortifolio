<template>
    <div class="stuff">
        <div class="container my-5" >
            <h1>Contact Me</h1>
            <header class="text-center mb-5">
            </header>
            <section id="mission" class="mb-5">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <p class="lead"><span> <i class="fa-solid fa-envelope"> </i></span> yonelamangele1700@gmail.com </p>
                    <p class="lead"><span> <i class="fa-solid fa-location-dot"> </i></span> Khayelitsha, Cape Town </p>
                    <p class="lead"><span><i class="fa-solid fa-phone"> </i></span> 068 425 5886 </p>
                </div>
                <div class="col-md-6">
                    <contacts-comp/>
                </div>
            </div>
        </section>
    </div>
</div>
</template>
<script>

import ContactsComp from '@/components/ContactsComp.vue'
export default {
  components: { ContactsComp },
}
</script>
<style scoped>
.stuff {
    height: 60vh;
}
* {
    color: white;
}
.row{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}
</style>

<!-- email icon - <i class="fa-solid fa-envelope"></i> -->

<!-- location - <i class="fa-solid fa-location-dot"></i> -->

<!-- phone - <i class="fa-solid fa-phone"></i> -->