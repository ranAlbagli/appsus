
import {missEmailService} from '../services/missEmail-service.js'
export default {


template:`
    <section>
        mails app 
    </section>
`
,
data(){
    return {
          emails:[]
    }
},


created(){
   
        this.emails = missEmailService.query ()
        .then((res)=>{

                console.log(res);
                
        })
}

}