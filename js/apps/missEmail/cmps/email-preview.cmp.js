export default {
    template: `
        <div class="email-preview flex space-between align-center ">
                <div class="email-subject">{{this.email.subject}}</div>
                <div class="email-controls flex ">
                    <div class="email-date flex align-center">{{formatDate}}</div>
                    <button class="preview-btn delete-btn">Delete</button>
                    <button class="preview-btn">Mark Read</button>
                </div>
        </div>
    `,
    data() {
        return {

        }
    },
    props: ['email'],
    methods: {

    },
    computed: {
        formatDate() {
            const date = new Date(this.email.sentAt);
            const day = date.getDay();
            const month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            return `${day}/${month}/${year} ${hours > 0 ? hours : '0' + hours}:${minutes > 0 ? minutes : '0' + minutes}`;
        }
    },
    created() {
        console.log(this.email)
    }


}