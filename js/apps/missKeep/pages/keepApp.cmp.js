import { keepService } from '../services/keepService.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteList from '../cmps/note-list.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';

import { bus,  KEEP_DELETE,MARK_TODO_DONE,DELETE_TODO,
         KEEP_PINNED,KEEP_MARKED,KEEP_STYLED,KEEP_ADDED
        } from '../../../services/eventBus-service.js';


export default {
    template: `
        <section>
            <note-filter @keep-filter="setFilter"></note-filter>
            <note-add  :noteTypes="noteTypes"></note-add>
            <note-list v-if="keepsToShow" :keeps="keepsToShow" :noteTypes="noteTypes"></note-list>
        </section>`,
    data() {
        return {
            noteTypes: {
				'note-text': { field: 'text', icon: 'fas fa-font', placeholder: 'What’s on your mind...' },
				'note-img': { field: 'url', icon: 'far fa-image', placeholder: 'Enter image URL...' },
				'note-video': { field: 'url', icon: 'fab fa-youtube', placeholder: 'Enter video URL...' },
				'note-audio': { field: 'url', icon: 'fas fa-volume-up', placeholder: 'Enter audio URL...' },
				'note-todo': { field: 'text', icon: 'fas fa-list', placeholder: 'Enter comma separated list...' },
			},
            keeps:[],
            filter: '',
        }
    },
    created() {
        keepService.query().then((res) => {
            this.keeps = res;  
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

        bus.$on(KEEP_ADDED, (note, data) => this.addKeep(note, data));
        
        // bus.$on(KEEP_EDIT, noteId => this.editKeep(noteId));
           
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

			keepService.saveKeep(note, data);
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
        addKeep(keep, data) {
			keepService.saveKeep(keep, data);
        },
        
        setFilter(filter) {
            this.filter = filter
        },
 
    },

    computed: {
		keepsToShow() {
            let keeps = this.keeps;
			if (this.filter && this.filter.type !== '') {
				keeps = keeps.filter(keep => this.filter.type === keep.settings.type)
			}

			if (this.filter && this.filter.txt) {
                let searchTerm = this.filter.txt.toLowerCase()            
				keeps = keeps.filter(keep => {
					let strValue = '';
					switch (keep.settings.type) {
						case 'note-text':
                            strValue = keep.data.text;   
							break;
						case 'note-img':
						case 'note-video':
						case 'note-audio':
							strValue = keep.data.src;
							break;
						case 'note-todo':
							strValue = keep.data.todos.map(todo => todo.text).join(',');
							break;
					}
					return strValue.includes(searchTerm);
				})
			}

			return keeps;
		}
	},
    components:{
        noteAdd,
        noteList,
        noteFilter
    }
}