
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
            <button id="show-modal" @click="showModal = true">Show Modal</button>
            <email-compose v-if="showModal" @close="showModal = false" @new-email="sendEmail" ></email-compose>
            <h3 slot="header">custom header</h3>   
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
            filter: '',
            showModal:false
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

        bus.$on('delete', (emailId) => {
            console.log(emailId)
            this.deleteEmail(emailId);
        })
    },
    computed: {
        emailsToShow() {    
             console.log(this.filter);
             
            if (!this.filter) return this.emails;
            if (this.filter.read) return this.emails.filter(email =>{ return email.isRead &&email.subject.includes(this.filter.txt)}) 
            if (!this.filter.read) return this.emails.filter(email => {return !email.isRead && email.subject.includes(this.filter.txt)})  
        },




        // emailsToShow() {
        //     let emailsArr = this.emails;
        //     let filteredBooks = emailsArr.filter((email) => {
        //         return ((email.subject.indexOf(this.filter.txt) !== -1 || this.filter.txt === '') &&
        //             (email.isRead) )
                 
        //     })
        //     return filteredBooks;
        // }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        },
        sendEmail(email) {
            console.log('adding ',email);
            
            emailService.addEmail(email)
        },
        toggleReadStatus(emailId) {    
            emailService.setReadUnread(emailId)
            .then(() => {
                console.log('toggle from bus');
            });

        },
        deleteEmail(emailId) {

            emailService.deleteEmailById(emailId)


        }
    },

    components: {
        emailList,
        emailFilter,
        emailStatus,
        emailCompose
    }

}
