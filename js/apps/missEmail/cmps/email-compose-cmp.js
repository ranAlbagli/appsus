
export default {

    template: `
                 <!-- <section >
                  <form @submit.prevent="sendEmail">
                  <input  autofocus v-model="email.subject" placeholder="Subject">
                  <textarea  v-model="email.body"></textarea>
                  <button :disabled="invalid">Send</button>          
                  </form>   
                   -->            
    <!-- <section class="contact-container">
        <form @submit.prevent="sendEmail"  id="contact">
            <input  autofocus v-model="email.subject" name="name" type="text" class="feedback-input" placeholder="Subject" />
            <textarea v-model="email.body" name="text" class="feedback-input" placeholder="Write your message here..."></textarea>
            <button :disabled="invalid">Send</button>  
        </form>
    </section> -->
               <!-- </section>             -->


             
                  <section name="modal">
    <div class="modal-mask">
        
      <div class="modal-wrapper">   
          <div class="modal-container">
                <div class="nav-modal">
                    New Message
                    <button class="exit-btn" @click="$emit('close')"> <i class="fas fa-times"></i></button>
                </div>
            <form @submit.prevent="sendEmail">
                 <input class="modal-input" autofocus v-model="email.subject" placeholder="Subject">   
                 <textarea  v-model="email.body"></textarea>
                 <button class="send-btn" :disabled="invalid">Send</button>
              </form>
        </div>
      </div>
    </div>
</section>

    `,
      data(){
        return {
              email :{
                  id : '',
                  subject : '',
                  body : '',
                  isRead: false,
                  isFavorite:false,
                  sentAt: new Date()
              }
        }
      },
      computed: {
        invalid() {
            return !this.email.subject || !this.email.body
       }          
    },
    methods :{
        sendEmail(){       
            
            this.$emit('new-email',this.email)
            this.email={
                id : '',
                subject : '',
                body : '',
                isRead: false,
                isFavorite:false,
                sentAt: new Date()
            }              
        }
    },
}