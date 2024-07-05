<form>
    <label> Name </label>
            <input type="name" placeholder="John Snow">
            <label>Email:</label>
            <input type="email" v-model="email" placeholder="example@domain">
            <label>Mesage:</label>
            <textarea type="text" v-model="message" placeholder="Type Your Message Here"></textarea>
            <section id="mainButtons">
                <section class="clearSec">
                    <button type="reset" class="clear">CLEAR</button>
                </section>
                <section class="sendSec">
                    <button type="submit" class="send">SEND</button>
                </section>
            </section>
        </form>


<label> Name: </label>
<input type="name" placeholder=""> 
<label> Email: </label>
<input type="email" v-model="message" placeholder="">
<textarea type="text" v-model="message" placeholder="Type Your Message Here"></textarea>