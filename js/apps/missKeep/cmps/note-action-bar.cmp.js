
import { bus, KEEP_DELETE,KEEP_PINNED,KEEP_MARKED, KEEP_STYLED } from '../../../services/eventBus-service.js'
export default {
	props: ['keep'],
	template: `
		<section class="note-item-actions flex space-between">

			<!-- <i :class="getIconClass" :title="getIconTitle"></i> -->
			<!-- <span> &nbsp; </span> -->
			<i class="fas fa-thumbtack" :class="{pinned: keep.settings.isPinned}" title="Pin note" @click="pinNote"></i>
			<i class="fas fa-check" :class="{marked: keep.settings.isMarked}" title="Mark note" @click="markNote"></i>
			<i class="fas fa-palette info colors dropdown" title="Change note color">
				<div class="dropdown-content">
					<template v-for="color in Colors">
						<span :style="{'background-color': color.value}"
							:class="getBgColorClass(color.value)"
							@click="styleKeep(color.value)"> &nbsp; </span>
					</template>
				</div>
			</i>
			<!-- <i class="fas fa-edit" :class="{marked: keep.settings.editMode}" title="Edit note" @click="editNote"></i> -->
			<!-- <i class="fas fa-clone info" title="Clone note" @click="cloneNote"></i> -->
			<i class="fas fa-trash-alt danger" title="Delete note" @click="removeNote"></i>

		</section>
	`,
	computed: {
		getIconClass() {
			return this.noteTypesInfo.icon + ' visible';
		},
		getIconTitle() {
			return this.capitalizeFirstLetter(this.keep.settings.type + ' note');
		},
    },
    created(){
         console.log(this.keep);
         
    },
	methods: {
		pinNote() {
			bus.$emit(KEEP_PINNED, this.keep._id);
		},
		markNote() {
			bus.$emit(KEEP_MARKED, this.keep._id);
		},
		styleKeep(newBgColor) {
			bus.$emit(KEEP_STYLED, this.keep._id, newBgColor);
		},
		// editNote() {
		// 	bus.$emit(KEEP_EDITING, this.keep._id);
		// },
		cloneNote() {
			bus.$emit(EVENT_NOTE_CLONED, this.keep._id);
		},
		removeNote() {
			bus.$emit(KEEP_DELETE, this.keep._id);
		},
		capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		getBgColorClass(color) {
			return (this.keep.bgColor === color) ? 'selected' : '';
		},
	},
	data() {
		return {
			Colors: [
				{ value: '#ffffff', name: 'white' },
				{ value: '#ff8888', name: 'red' },
				{ value: '#ffcc88', name: 'orange' },
				{ value: '#ffff88', name: 'yellow' },
				{ value: '#ccff99', name: 'green' },
				{ value: '#aaffee', name: 'turquoise' },
				{ value: '#88ddff', name: 'sky' },
				{ value: '#88bbff', name: 'blue' },
				{ value: '#ddbbff', name: 'purple' },
				{ value: '#dddddd', name: 'grey' },
			]
		}
	}
}
