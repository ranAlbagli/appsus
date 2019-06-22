export default {
    template: `<section :style="{'background-color': keep.bgColor}">
                  <p>{{keep.data.text}}</p>
                </section>`,

    props:['keep'],
    created(){

        
         
    }
    
}



// import noteItemActions from '../notes-item-actions-cmp.js';
// import noteEdit from '../notes-edit-cmp.js';

// export default {
// 	props: ['note', 'noteTypesInfo'],
// 	template: `
// 		<section class="note-type note-type-text"
// 			:class="{marked: note.settings.marked}"
// 			:style="{'background-color': note.styles.backgroundColor }">

// 			<p>{{note.data.text}}</p>

// 			<note-item-actions :note="note" :noteTypesInfo="noteTypesInfo"></note-item-actions>

// 			<note-edit :note="note" v-if="note.settings.editMode"></note-edit>

// 		</section>
// 	`,
// 	components: {
// 		noteItemActions,
// 		noteEdit,
// 	},
// }