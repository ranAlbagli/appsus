//cmps import
import emailPreview from '../cmps/email-preview.cmp.js'

export default {
    template: `
   <div class="email-list ui-box">
                <email-preview 
                              v-for="currentEmail in emails" 
                              :key="currentEmail.id"
                              :email="currentEmail">
                </email-preview>
    </div>
    `,
    props: ['emails'],
    data() {
        return {

        }
    },
    components: {
        emailPreview
    }
}