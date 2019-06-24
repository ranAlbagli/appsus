import noteActionBar  from '../note-action-bar.cmp.js'
import noteEdit  from '../note-edit.cmp.js'


export default {
    template: `
        <section
			:style="{'background-color': keep.bgColor}">
			<ul>
                <li  v-for="(todo, idx) in keep.data.todos"
                    class="todo clean-list"
                    :class="isDone(todo)"
                    :key="idx"
                    @click="markDone(this.keep._id,idx)">
                    {{todo.text}}
				</li>
			</ul>
            <note-action-bar :keep="keep"  :noteTypesInfo="noteTypesInfo" ></note-action-bar>
            <note-edit :keep="keep" v-if="keep.settings.editMode"></note-edit>
		</section>
    `,
    props: ['keep','noteTypesInfo'],
    methods: {
        markDone(keepId, todoIdx) {
            bus.$emit(MARK_TODO_DONE, idx);
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

    },
    components:{
        noteActionBar,
        noteEdit
    }

}