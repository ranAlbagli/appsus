export default {
    template: `
        <div class="email-preview">
                <div class="email-from">{{this.email.from}}</div>
                <div class="email-subject">{{this.email.subject}}</div>
                <div class="email-controls">
                    <button>Delete</button>
                    <button>Mark Read</button>
                </div>
                <div class="email-body">{{this.email.body}}</div>
        </div>
    `,
    data() {

    },
    props: ['email'],
    methods: {

    },
    computed: {

    }
 

}