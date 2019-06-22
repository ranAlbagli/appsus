import { keepService } from '../services/keepService.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

import { bus,  KEEP_DELETE} from '../../../services/eventBus-service.js'


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
            
        })

        bus.$on(KEEP_DELETE, (keepId) => {
            this.deleteKeep(keepId);
        })
    },

    methods:{
        deleteKeep(keepId) {     
            keepService.deleteKeepById(keepId)
        },
    },
    components:{
        noteAdd,
        noteList
    }
}