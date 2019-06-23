
export default {

    template: `<section name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">   
                                <div class="modal-container">
                                    <div class="nav-modal">
                                    New Message
                                    <button class="exit-btn" @click="$emit('close')"> <i class="fas fa-times"></i></button>
                                    </div>
                                    <form @submit.prevent="sendEmail">
                                        <input class="modal-input" autofocus v-model="email.from" placeholder="from">   
                                        <input class="modal-input" autofocus v-model="email.subject" placeholder="Subject">   
                                        <textarea  v-model="email.body"></textarea>
                                        <button class="send-btn" :disabled="invalid">Send</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </section>`,
    data() {
        return {
            email: {
                id: '',
                subject: '',
                body: '',
                from: '',
                isRead: false,
                isFavorite: false,
                sentAt: new Date()
            }
        }
    },
    computed: {
        invalid() {
            return !this.email.subject || !this.email.body
        }
    },
    methods: {
        sendEmail() {

            this.$emit('new-email', this.email)
            this.email = {
                id: '',
                subject: '',
                body: '',
                from: '',
                isRead: false,
                isFavorite: false,
                sentAt: new Date()
            }
        }
    },
}