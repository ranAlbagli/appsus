import { bus, DELETE_TODO, MARK_TODO_DONE } from '../../../../services/eventBus-service.js'


export default {
    template: `
        <section class="todo ui-box"
			:style="{'background-color': keep.bgColor}">
			<ul>
                <li  v-for="(todo, idx) in keep.data.todos"
                    class="todo"
                    :class="isDone(todo)"
                    :key="idx"
                    @click="markDone(this.keep._id,idx)">
                    {{todo.text}}
                    <button @click="deleteTodo(keep._id,idx)">X</button>
				</li>
			</ul>
		</section>
    `,
    props: ['keep'],
    methods: {
        markDone(keepId, todoIdx) {
            bus.$emit(MARK_TODO_DONE, idx);
        },
        deleteTodo(keepId, todoIdx) {
            bus.$emit(DELETE_TODO, idx);
        },
        isDone(todo) {
            return todo.completed ? 'completed' : '';
        }
    },
    created() {
        return {

        }
    },
    computed: {

    }

}