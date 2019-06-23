import { keepService } from '../services/keepService.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from '../cmps/note-list.cmp.js';

import { bus,  KEEP_DELETE,MARK_TODO_DONE,DELETE_TODO,
         KEEP_PINNED,KEEP_MARKED,KEEP_STYLED,KEEP_EDIT
        } from '../../../services/eventBus-service.js';


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
        bus.$on(KEEP_PINNED, noteId => this.pinKeep(noteId));
        
        bus.$on(KEEP_MARKED, noteId => this.markKeep(noteId));
        
        bus.$on(KEEP_STYLED, (noteId, bgColor) => this.styleKeep(noteId, bgColor));
        
        bus.$on(KEEP_EDIT, noteId => this.editKeep(noteId));
           
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
        },

        addKeep(note, data) {
			notesService.saveNote(note, data);
		},
		pinKeep(noteId) {
			notesService.pinNote(noteId);
		},
		markKeep(noteId) {
			notesService.markNote(noteId);
		},
		styleKeep(keepId, bgColor) {
            console.log('here');
            
			keepService.styleKeep(keepId, bgColor);
		},
 
    },
    components:{
        noteAdd,
        noteList
    }
}