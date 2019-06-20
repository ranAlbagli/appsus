
import { emailService } from '../services/emailService.js'
export default {
  template:`
  <div>  Read emails status {{readEmails}} </div>
  
  `, 
   props:['emails'],
   data(){
    return {
            //  readEmailsNum:0
    }
   },
   computed:{
           readEmails(){
               return this.emails.length - emailService.howManyEmailsUnread(this.emails)         
             }
   },
   created(){
        
   },
   components :{
   }


}