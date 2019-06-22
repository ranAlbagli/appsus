export default {
    template: `
        <section class=""
			:style="{'background-color': keep.bgColor}">
			<ul>
				<li v-for="(todo, idx) in keep.data.todos"
                    :class="statusClass"
                    :key="idx"
					@click="updateStatus(idx)">
					{{todo.text}}
				</li>
			</ul>
		</section>
    `,
    props: ['keep'],
    methods: {
        updateStatus(id){

        }
    },
    created() {
        return {

        }
    },
    computed: {

    }

}