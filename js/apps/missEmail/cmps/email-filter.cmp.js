


export default {
    template: `
        <section class="emails-filter">
            <h1>Emails Filter</h1>
            <input type="text" v-model="filterBy.txt" @input="emitFilter" />
            <button  @click="toggle"> READ</button>
            <button  @click="toggle"> UNREAD</button>
            <!-- <button  @click="all"> ALL</button> -->
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',   
                read : false,    
             }
        }
    },
    methods: {
        // all(){
        //     this.filterBy=null
        //     this.emitFilter();
        // },
        toggle(){
            this.filterBy.read=!this.filterBy.read
            this.emitFilter();
        },
        emitFilter() {
            this.$emit('set-filter', this.filterBy);
        }
    }
}
