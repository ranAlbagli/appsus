
import { emailService } from '../services/emailService.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'

import { bus } from '../../../services/eventBus-service.js'

export default {
    template: `
     <section class="email-app" v-if="emails">
            <div class="emails-side-bar">
            <email-status :emails="emails"></email-status>
            <email-compose @new-email="sendEmail" ></email-compose>
            </div>
            <div>
                <email-filter @set-filter="setFilter"></email-filter> 
                <email-list :emails="emailsToShow"></email-list>
            </div>
     </section>
   `,
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
        bus.$on('setread', (emailId) => {
            console.log(emailId)
            this.toggleReadStatus(emailId);
        })
    },
    computed: {
        emailsToShow() {    
            if (!this.filter) return this.emails;
            if (this.filter.read) return this.emails.filter(email => email.isRead)  
            if (!this.filter.read) return this.emails.filter(email => !email.isRead)  
            return this.emails.filter(email => email.subject.includes(this.filter.txt)) 
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        },
        sendEmail(email) {
            emailService.addEmail(email)
        },
        toggleReadStatus(emailId) {
            emailService.setReadUnread(emailId).then(() => {
                console.log('toggle from bus');
            });

        }
    },

    components: {
        emailList,
        emailFilter,
        emailStatus,
        emailCompose
    }

}
