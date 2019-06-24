
import { emailService } from '../services/emailService.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailStatus from '../cmps/email-status.cmp.js'
import emailCompose from '../cmps/email-compose-cmp.js'
import emailDetails from '../cmps/email-details.cmp.js'

import { bus, MAIL_MARK_READ, MAIL_DELETE, MAIL_MARK_FAVORITE } from '../../../services/eventBus-service.js'

export default {
    template: `
     <main class="flex">
     <button  class="compose-btn" @click="showModal = true"><i class="fas fa-pen"></i></button>
     <email-compose v-if="showModal" @close="showModal = false" @new-email="sendEmail" ></email-compose>
        <div class="mails-aside ui-box flex flex-col">
                <div class="user-status flex align-center">
                    <img src="21.jpg" alt="" />
                    <div>
                        <p class="user-name">Welcome user</p>
                        <p class="user-role">Lorem ipsum dolor siepturi!</p>
                    </div>
                </div>
                <nav class="mails-aside-nav">
                    <ul class="clean-list">
                        <!-- <li><a class="active" href="#">inbox ({{emailsUnreadCount}})</a></li> -->
                        <li>
                            <email-status 
                                :totalCount="emailTotalCount"
                                :readCount="emailReadCount">
                            </email-status>
                        </li>
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
                        <p class="count">{{this.emailTotalCount}}</p>
                    </div>
                </div>

                <div class="email-stats-data-box flex align-center justify-left">
                    <i class="fas fa-inbox"></i>
                    <div class="text">
                        <p class="property">unread messages</p>
                        <p class="count">{{emailsUnreadCount}}</p>
                    </div>
                </div>
                <div class="email-stats-data-box flex align-center justify-left">
                    <i class="fas fa-glasses"></i>
                    <div class="text">
                        <p class="property">read messages</p>
                        <p class="count">{{emailReadCount}}</p>
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
            filterBy: '',
            showModal: false
        }
    },
    created() {
        emailService.query()
            .then((res) => {
                this.emails = res;
            })
        bus.$on(MAIL_MARK_READ, (emailId) => {
            this.toggleReadStatus(emailId);
        })

        bus.$on(MAIL_DELETE, (emailId) => {
            this.deleteEmail(emailId);
        })
        bus.$on(MAIL_MARK_FAVORITE, (emailId) => {
            this.setFavorite(emailId);
        })
    },
    computed: {
        emailsToShow() {
            let emailsArr = this.emails;
            let filteredEmails = emailsArr.filter((email) => {
                return ((email.subject.indexOf(this.filterBy.txt) !== -1 || this.filterBy.txt === false) &&
                    (email.isRead === this.filterBy.read || this.filterBy.read === false) &&
                    (email.isRead === !this.filterBy.unread || this.filterBy.unread === false) &&
                    (email.isFavorite === this.filterBy.favorite || this.filterBy.favorite === false)
                )

            })
            return filteredEmails;
        },
        emailsUnreadCount() {
            return this.emailTotalCount - this.emailReadCount;
        },
        emailTotalCount() {
            return this.emails.length;
        },
        emailReadCount() {
            return this.emails.reduce((accumulator, email) => {
                if (email.isRead) accumulator++;
                return accumulator;
            }, 0)
        },
    },
    methods: {
        setFilter(filter) {
            this.filterBy = filter
        },
        sendEmail(email) {
            emailService.addEmail(email);
            emailService.query()
                .then((res) => {
                    this.emails = res;
                })
        },
        toggleReadStatus(emailId) {
            emailService.toggleRead(emailId)
                .then(() => {});
        },
        deleteEmail(emailId) {
            emailService.deleteEmailById(emailId)
        },
        setFavorite(emailId) {
            emailService.toggleFavorite(emailId)
                .then(() => {});
        }
    },

    components: {
        emailList,
        emailFilter,
        emailStatus,
        emailCompose,
        emailDetails
    }

}
