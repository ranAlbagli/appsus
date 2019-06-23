// import {bus, KEEPS_FILTERED } from '../../../services/eventBus-service.js'

export default {
	template: `
		<section class="search notes-filter flex justify-content-center">

			<div>
				<button class="fas fa-search" @click="updateFilter"></button>
				<input v-model="filter.txt" type="search" placeholder="Search keeps" @input="updateFilter">
			</div>

			<select v-model="filter.type" @change="updateFilter">
				<option value="">All</option>
				<option value="text">Text</option>
				<option value="image">Image</option>
				<option value="video">Video</option>
				<option value="audio">Audio</option>
				<option value="list">Todo</option>
			</select>				

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