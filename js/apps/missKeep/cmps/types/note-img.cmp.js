
import noteActionBar  from '../note-action-bar.cmp.js'
import noteEdit  from '../note-edit.cmp.js'
export default {
	
	template: `
		<section 
			:style="{'background-color': keep.bgColor }">
			<img :src="keep.data.src" width="100%"/>
            <note-action-bar :keep="keep" :noteTypesInfo="noteTypesInfo"  ></note-action-bar>
            <note-edit :keep="keep" v-if="keep.settings.editMode"></note-edit>
		</section>
	`,
    props:['keep','noteTypesInfo'],
    created(){

        console.log(this.keep);
        
    },
    methods: {
       
    },
    components:{
        noteActionBar,
        noteEdit
    }
}