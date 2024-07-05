<template>
    <div>
        <form  action="https://formcarry.com/s/koOwMO21l5o" method="POST" enctype="multipart/form-data">
            <label> Name: </label>
            <input type="name" placeholder="eg. Cristiano Ronaldo">
            
            <label> Email: </label>
            <input type="email" v-model="email" placeholder="eg. example@gmail.com">
            
            <label> Mesage: </label>
            <textarea type="text" v-model="message" placeholder="Type Your Message Here"> </textarea>
            
            <section id="mainButtons">
                
                <section class="clearSec">
            <button type="reset" class="clear"> CLEAR </button>
                        </section>
            <section class="sendSec">
                <button type="submit" class="send"> SEND </button>
            </section>
                    </section>
        </form>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>