import { bus } from '../../../services/eventBus-service.js'


export default {
    template: `
        <div class="email-preview flex space-between align-center" :class="isRead">
                <div :class="isRead">{{this.email.subject}}</div>
                <div class="email-controls flex ">
                    <div class="email-date flex align-center">{{formatDate}}</div>
                    <div>
                        <button @click="emitEmailDelete" class="preview-btn delete-btn"><i class="fas fa-trash-alt"></i></button>
                        <button @click="emitEmailRead" class="preview-btn">{{this.btnText}}</button>
                    </div>
                </div>
        </div>
    `,
    data() {
        return {

        }
    },
    props: ['email'],
    methods: {
        emitEmailRead() {
            console.log('emitted')
            bus.$emit('setread', this.email.id);
        },
        emitEmailDelete() {

        }
    },
    computed: {
        formatDate() {
            const date = new Date(this.email.sentAt);
            const day = date.getDay();
            const month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return `${day}/${month}/${year} ${hours > 10 ? hours : '0' + hours}:${minutes > 10 ? minutes : '0' + minutes}`;
        },
        isRead() {
            return this.email.isRead ? '' : 'mail-read';
        },
        btnText() {
            return this.email.isRead ? 'Mark Unread' : 'Mark Read'
        }
    },
    created() {
        console.log(this.email)
    }


}