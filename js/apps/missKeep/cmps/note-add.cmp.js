import { bus, KEEP_ADDED } from '../../../services/eventBus-service.js'
import { keepService } from '../services/keepService.js';

export default {
	props: ['noteTypes'],
	template: `
		<section class="notes-add flex ">

			<input :type="fieldType" autocomplete="off" v-model="userData"
				:placeholder="placeholder" @keyup.enter="addKeep" ref="newNoteEl" />

			<div class="flex">
				<template v-for="(noteType, idx) in noteTypes">
					<i :class="setSelectedType(idx, noteType.icon)" @click="updateSelectedType(idx)"></i> 
				</template>
			</div>
		</section>
	`,
	data() {
		return {
			newNote: keepService.emptyKeep(),
			userData: ''
		}
	},
	computed: {
		fieldType() {
			return this.noteTypes[this.newNote.settings.type].field;
		},
		placeholder() {
			return this.noteTypes[this.newNote.settings.type].placeholder;
		}
	},
	methods: {
		setSelectedType(noteType, noteIcon) {
			return (this.newNote.settings.type === noteType)
				? noteIcon + ' fa-lg selected'
				: noteIcon + ' fa-lg';
        },
        
		updateSelectedType(noteType) {
			this.newNote.settings.type = noteType;
			this.$refs.newNoteEl.focus();
		},
		addKeep() {
			bus.$emit(KEEP_ADDED, this.newNote, this.userData);
			this.newNote = keepService.emptyKeep();
			this.userData = '';
		},
	}
}
