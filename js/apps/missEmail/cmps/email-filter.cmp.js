


export default {
    template: `
        <section class="emails-filter">
            <h1>Emails Filter</h1>
            <input type="text" v-model="filterBy.txt" @input="emitFilter" />
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: ''
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy.txt);
        }
    }
}
