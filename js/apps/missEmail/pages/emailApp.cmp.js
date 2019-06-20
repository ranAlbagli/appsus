
import { emailService } from '../services/emailService.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'
export default {


    template: `
     <section class="email-app" v-if="emails">

            <div class="emails-side-bar">
            <email-status :emails="emails"></email-status>
            </div>
            <div>
                <email-filter @set-filter="setFilter"></email-filter> 
                <email-list :emails="emailsToShow"></email-list>
            </div>
     </section>
`
    ,
    data() {
        return {
            emails: [],
            filter: ''

        }
    },
    created() {
        emailService.query()
            .then((res) => {
                this.emails = res;
                console.log(res);
            })
    },
    computed: {
        emailsToShow() {
            if (!this.filter) return this.emails;
            return this.emails.filter(email => email.subject.includes(this.filter))
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        }
    },

    components: {
        emailList,
        emailFilter,
        emailStatus
    }

}
