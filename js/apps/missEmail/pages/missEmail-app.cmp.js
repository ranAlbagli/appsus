
import {missEmailService} from '../services/missEmail-service.js'
import emailList from '../cmps/missEmail-list.cmp.js'
export default {


template:`
     <section class="email-app" v-if="emails">
            <email-list :emails="emails"></email-list>
     </section>
`
,
data(){
    return {
          emails:[]
    }
},


created(){
   
        emails = missEmailService.query ()
        .then((res)=>{
            //  return res;
             this.emails=res;    
        })
},

components:{
    emailList
}

}