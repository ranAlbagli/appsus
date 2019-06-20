

// import  emailPreview from './book-preview.cmp.js';


import {missEmailService} from '../services/missEmail-service.js'



export default {
    template: `
   <section>
        <h1>emils</h1>
        <ul  class="email-list">
                <email-preview 
                              v-for="currentEmail in emails" 
                              :key="currentEmail.id"
                              :email="currentEmail">
                </email-preview>
            </ul>

    </section>
    `,
    props: ['emails'],
    data() {
        return {
           
        }
    },
    computed: {
     
    },
    created() {
        
    },
    methods: {
        // select(currBook){
        
        //     this.$emit('selected', currBook);
            
        // }
      
    },
    components:{
         emailsPreview
    }
}