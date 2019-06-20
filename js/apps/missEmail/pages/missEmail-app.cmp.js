
import { missEmailService } from '../services/missEmail-service.js'
import emailList from '../cmps/missEmail-list.cmp.js'
export default {


    template: `
     <section class="email-app" v-if="emails">

            <div class="emails-side-bar"></div>
            <div>
                <email-list :emails="emails"></email-list>
            </div>
     </section>
`
    ,
    data() {
        return {
            emails: []
        }
    },


    created() {

        missEmailService.query()
            .then((res) => {
                this.emails = res;
                console.log(res);

            })
    },

    components: {
        emailList
    }

}