import { keepService } from '../services/keepService.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from '../cmps/note-list.cmp.js';


export default {
    template: `
        <section>
            <note-add></note-add>
            <note-list v-if="keepsToShow" :keeps="keepsToShow"></note-list>
        </section>`,
    data() {
        return {
            keepsToShow: [],
        }
    },
    created() {
        keepService.query().then((res) => {
            this.keepsToShow = res;
            // console.log(this.keeps);
            
        })
    },
    components:{
        noteAdd,
        noteList
    }
}