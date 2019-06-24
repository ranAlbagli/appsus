// import {bus, KEEPS_FILTERED } from '../../../services/eventBus-service.js'

export default {
	template: `
		<section class="flex justify-center">
		<div class="notes-filter ui-box flex">
		
				<button  class="fas fa-search search-btn" @click="updateFilter"></button>
				<input class="filter-input" v-model="filter.txt" type="search" placeholder="Search keeps" @input="updateFilter">
		

			<select v-model="filter.type" @change="updateFilter">
				<option value="">All</option>
				<option value="note-text">Text</option>
				<option value="note-img">Image</option>
				<option value="note-video">Video</option>
				<option value="note-audio">Audio</option>
				<option value="note-todo">Todo</option>
			</select>				
	   </div>
		</section>
	`,
	data() {
		return {
			filter: {
				txt: '',
				type: ''
			},
		}
	},
	methods: {
		updateFilter() {
			this.$emit('keep-filter', this.filter);
		},
	}
}