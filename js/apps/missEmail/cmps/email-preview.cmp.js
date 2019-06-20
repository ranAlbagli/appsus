export default {
    template: `
        <div class="email-preview flex align center space-between">
                <div class="email-subject">{{this.email.subject}}</div>
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

    },
    created() {
        console.log(this.email)
    }
 

}