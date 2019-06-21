
import { emailService } from '../services/emailService.js'
export default {
  template:`   
               <div class="progress-bar-container">
               <div class="progress-bar" :style="{ 'width': readEmails +'%'}" >{{readEmails}}%</div>  
               </div>
  `, 
   props:['emails'],
   data(){
    return {
        
    }
   },
   computed:{
           readEmails(){
                   console.log(this.emails.length);
                   
               return    emailService.howManyEmailsUnread(this.emails) / this.emails.length 
             }
   },
 
   created(){
        
   },
   components :{
   }


}