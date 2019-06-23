import { bus, MAIL_DELETE, MAIL_MARK_FAVORITE, MAIL_MARK_READ } from '../../../services/eventBus-service.js'




export default {
    template: `
        <div class="email-row flex align-center space-between" :class="isRead">
                    <div class="email-star"><button @click="emitEmailFavorite"><i :class="isFavorite" class="fas fa-star" ></i></button></div>
                    <div class="email-sender-pic"><img :src="avatar" alt=""></div>
                    <div class="email-sender-name">{{this.email.from}}</div>
                    <div class="email-preview"><span>{{this.email.subject}}</span>  {{this.email.body.substring(0, 90)}}</div>
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
            bus.$emit(MAIL_MARK_READ, this.email._id);
        },
        emitEmailDelete() {
            bus.$emit(MAIL_DELETE, this.email._id);
        },
        emitEmailFavorite() {
            bus.$emit(MAIL_MARK_FAVORITE, this.email._id);
        }
    },
    computed: {
        formatDate() {
            const date = new Date(this.email.sentAt);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return `${day}/${month}/${year} ${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`;
        },
        isRead() {
            return this.email.isRead ? '' : 'new-mail';
        },
        btnText() {
            return this.email.isRead ? 'fas fa-envelope-open-text' : 'fas fa-envelope'
        },
        isFavorite() {
            return this.email.isFavorite ? 'mail-favorite' : '';
        },
        avatar() {
            return `https://api.adorable.io/avatars/285/${this.email.from}.png`
        }
    },
    created() {
        // console.log(this.email)
    }


}