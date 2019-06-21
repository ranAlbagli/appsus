import { bus } from '../../../services/eventBus-service.js'


export default {
    template: `
        <div class="email-row flex align-center" :class="isRead">
                    <div class="email-star"><button><i class="fas fa-star"></i></button></div>
                    <div class="email-sender-pic"><img src="21.jpg" alt=""></div>
                    <div class="email-sender-name">Danny</div>
                    <div class="email-preview"><span>{{this.email.subject}}</span>{{this.email.body.substring(0, 10)}}</div>
                    <div class="email-date">{{formatDate}}</div>
                    <div class="email-options">
                        <button @click="emitEmailRead"><i :class="btnText"></i></button>
                        <button @click="emitEmailDelete"><i class="fas fa-trash"></i></button>
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
            console.log(this.email._id);
            
            bus.$emit('setread', this.email._id);
        },
        emitEmailDelete() {
            bus.$emit('delete', this.email._id);
            
        }
    },
    computed: {
        formatDate() {
            const date = new Date(this.email.sentAt);
            const day = date.getDate();
            const month = date.getMonth()+1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return `${day}/${month}/${year} ${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;
        },
        isRead() {
            return this.email.isRead ? 'mail-read' : '';
        },
        btnText() {
            return this.email.isRead ? 'fas fa-envelope-open-text' : 'fas fa-envelope'
        }
    },
    created() {
        // console.log(this.email)
    }


}