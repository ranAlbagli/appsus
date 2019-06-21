
import { emailService } from '../services/emailService.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'
import emailCompose from '../cmps/email-compose.cmp.js'

import { bus } from '../../../services/eventBus-service.js'

export default {
    template: `
     <!-- <section class="email-app" v-if="emails">
            <div class="emails-side-bar">
            <email-status :emails="emails"></email-status>
            <button  class="compose-btn" @click="showModal = true"><img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt=""/><p>Compose</p></button>
            <email-compose v-if="showModal" @close="showModal = false" @new-email="sendEmail" ></email-compose>  
            </div>
            <div>
                <email-filter @set-filter="setFilter"></email-filter> 
                <email-list :emails="emailsToShow"></email-list>
            </div>
     </section> -->
     <main class="flex">
        <div class="mails-aside ui-box flex flex-col">
                <div class="user-status flex align-center">
                    <img src="21.jpg" alt="" />
                    <div>
                        <p class="user-name">Welcome Sergei</p>
                        <p class="user-role">team admin</p>
                    </div>
                </div>
                <nav class="mails-aside-nav">
                    <ul class="clean-list">
                        <li><a class="active" href="#">inbox</a></li>
                        <li><a href="#">Deleted</a></li>
                    </ul>
                </nav>
        </div>
        <div class="mails-main flex flex-col">
            <email-filter @set-filter="setFilter"></email-filter>
            <div class="email-stats ui-box flex space-between align-center">
                <div class="email-stats-data-box flex align-center justify-left">
                    <i class="fas fa-comments"></i>
                    <div class="text">
                        <p class="property">overall messages</p>
                        <p class="count">2389</p>
                    </div>
                </div>
                <div class="email-stats-data-box flex align-center justify-left">
                    <i class="fas fa-inbox"></i>
                    <div class="text">
                        <p class="property">unread messages</p>
                        <p class="count">2389</p>
                    </div>
                </div>
                <div class="email-stats-data-box flex align-center justify-left">
                    <i class="fas fa-glasses"></i>
                    <div class="text">
                        <p class="property">read messages</p>
                        <p class="count">2389</p>
                    </div>
                </div>
            </div>
            <email-list :emails="emailsToShow"></email-list>
        </div>

     </main>


   `,
    data() {
        return {
            emails: [],
            filter: '',
            showModal: false
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
            if (this.filter.read) return this.emails.filter(email => { return email.isRead && email.subject.includes(this.filter.txt) })
            if (!this.filter.read) return this.emails.filter(email => { return !email.isRead && email.subject.includes(this.filter.txt) })
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
            console.log('adding ', email);

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
