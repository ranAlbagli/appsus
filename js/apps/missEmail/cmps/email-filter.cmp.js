


export default {
    template: `
        <section class="emails-filter">
            <h1>Emails Filter</h1>
            <input type="text" v-model="filterBy.txt" @input="emitFilter" />
            <button  @click="read"> READ</button>
            <button  @click="unread"> UNREAD</button>
            <button  @click="all"> ALL</button>
            <!-- <button  @click="starred"> STARRED</button> -->
            <!-- <button  @click="all"> ALL</button> -->
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',   
                read : null,
                // favorite:false,    
             }
        }
    },
    methods: {
        all(){
            this.filterBy=''
            this.emitFilter();
            this.filterBy = {
                txt: '',   
                read : null,
                // favorite:false,    
             }
        },
        
        read(){
            this.filterBy.read=true
            this.emitFilter();
        },
        unread(){
            this.filterBy.read=false
            this.emitFilter();
        },
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        },
        starred(){
            this.filterBy.favorite=true;
            this.emitFilter();
        }
    }
}
