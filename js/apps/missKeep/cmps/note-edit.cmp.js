// import { bus, KEEP_EDITING, KEEP_UPDATED } from '../../../services/eventBus-service.js'

// export default {
// 	props: ['keep'],
// 	template: `
// 		<section class="notes-edit">

// 			<input type="text" autocomplete="off" v-model="newData" />
// 			<button @click="chancelEdit">Chancel</button>
// 			<button @click="saveEdit">Update</button>

// 		</section>
// 	`,
// 	data() {
// 		return {
// 			newData: '',
// 		}
// 	},
// 	created() {
// 		this.newData = this.getNoteData();
// 	},
// 	methods: {
// 		getNoteData() {
// 			let strValue = '';
// 			switch (this.keep.type) {
// 				case 'note-text':
// 					strValue = this.note.data.text;
// 					break;
// 				case 'note-img':
// 				case 'note-video':
// 				case 'note-audio':
// 					strValue = this.keep.data.src;
// 					break;
// 				case 'note-todo':
// 					strValue = this.keep.data.todos.map(list => list.text).join(',');
// 					break;
// 			}
// 			return strValue;
// 		},
// 		chancelEdit() {
// 			bus.$emit(EVENT_NOTE_EDITING, this.note.id);
// 		},
// 		saveEdit() {
// 			bus.$emit(EVENT_NOTE_EDITING, this.note.id);
// 			bus.$emit(EVENT_NOTE_UPDATED, this.note, this.newData);
// 		}
// 	}
// }