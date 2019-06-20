
export default {

    template:` <section>
                  <form @submit.prevent="sendEmail">
                  <input  autofocus v-model="email.subject" placeholder="Subject">
                  <textarea  v-model="email.body"></textarea>
                  <button :disabled="invalid">Send</button>          
                  </form>                   
               </section>            
    `,
      data(){
        return {
              email :{
                  id : '',
                  subject : '',
                  body : '',
                  isRead: false,
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
                sentAt: new Date()

            }              
        }
    },
}