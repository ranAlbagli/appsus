
import noteActionBar  from '../note-action-bar.cmp.js'
import noteEdit  from '../note-edit.cmp.js'
export default {

    template: `
		<section 
			:style="{'background-color': keep.bgColor }">

            <p>{{keep.data.text}}</p>
			<audio  controls :src="keep.data.src" style="width:100%;"></audio>
            <note-action-bar :keep="keep" :noteTypesInfo="noteTypesInfo" ></note-action-bar>
            <note-edit :keep="keep" v-if="keep.settings.editMode"></note-edit>
		</section>
	`,
    props: ['keep','noteTypesInfo'],
    created() {
    },
    methods: {
      
    },
    components:{
        noteActionBar,
        noteEdit

    }
}