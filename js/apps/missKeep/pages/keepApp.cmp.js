import { keepService } from '../services/keepService.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

import { bus,  KEEP_DELETE,MARK_TODO_DONE,DELETE_TODO} from '../../../services/eventBus-service.js';


export default {
    template: `
        <section>
            <note-add></note-add>
            <note-list v-if="keepsToShow" :keeps="keepsToShow" class="flex wrap"></note-list>
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
        bus.$on(MARK_TODO_DONE,todoIdx=>{
            this.markTodoDone(todoIdx);
        })
        bus.$on(DELETE_TODO,todoIdx=>{
            this.deleteTodo(todoIdx);
        })
    },

    methods:{
        deleteKeep(keepId) {     
            keepService.deleteKeepById(keepId)
        },
        deleteTodo(keepId,idx){
            keepService.deleteTodoByIdx(keepId,idx);
        },
        markTodoDone(keepId,idx){
            keepService.deleteTodoByIdx(keepId,idx);
        }
    },
    components:{
        noteAdd,
        noteList
    }
}