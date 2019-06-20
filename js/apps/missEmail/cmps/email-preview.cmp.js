export default {
    template: `
        <div class="email-preview flex align center space-between">
                <div class="email-subject">{{this.email.subject}}</div>
                <div>{{formatDate}}</div>
                <div class="email-controls">
                    <button class="preview-btn">Delete</button>
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
            let date = new Date(this.email.sentAt);

            return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
        }
    },
    created() {
        console.log(this.email)
    }


}