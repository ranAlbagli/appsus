
import noteActionBar  from '../note-action-bar.cmp.js'
export default {
	
	template: `
		<section 
			:style="{'background-color': keep.bgColor }">
			<img :src="keep.data.src" width="100%"/>
            <note-action-bar :keep="keep" ></note-action-bar>
		</section>
	`,
    props:['keep'],
    created(){

        console.log(this.keep);
        
    },
    methods: {
       
    },
    components:{
        noteActionBar
    }
}