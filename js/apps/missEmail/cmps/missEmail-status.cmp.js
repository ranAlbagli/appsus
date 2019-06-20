
import { missEmailService } from '../services/missEmail-service.js'
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
               return this.emails.length - missEmailService.howManyEmailsUnread(this.emails)         
             }
   },
   created(){
        
   },
   components :{
   }


}