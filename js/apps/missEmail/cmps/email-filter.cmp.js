


export default {
    template: `
        <section class="emails-filter">
            <h1>Emails Filter</h1>
            <input type="text" v-model="filterBy.txt" @input="emitFilter" />
            <button  @click="emitFilter"> read</button>
            <button  @click="emitFilter"> unread</button>
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
        emitFilter() {
            this.filterBy.read=!this.filterBy.read
            this.$emit('set-filter', this.filterBy);
        }
    }
}
