
import noteActionBar  from '../note-action-bar.cmp.js'
export default {

    template: `
		<section 
			:style="{'background-color': keep.bgColor }">

            <p>{{keep.data.text}}</p>
			<audio  controls :src="keep.data.src" style="width:100%;"></audio>
            <note-action-bar :keep="keep" :noteTypesInfo="noteTypesInfo" ></note-action-bar>
		</section>
	`,
    props: ['keep','noteTypesInfo'],
    created() {
    },
    methods: {
      
    },
    components:{
        noteActionBar

    }
}