

export default {

    template:` <section>
                           
     
               </section>
    
             
    `,
      data(){
        return {
              email :{
                  subject : '',
                  body : '',
                  isRead: false,
                  sentAt: new Date()
              }
        }
      }
}