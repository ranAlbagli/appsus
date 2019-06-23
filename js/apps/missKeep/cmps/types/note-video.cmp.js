
import noteActionBar  from '../note-action-bar.cmp.js'
export default {
	
	template: `
		<section 
			:style="{'background-color': keep.bgColor }">
            <p>{{keep.data.text}}</p>
			<video :src="keep.data.src" controls ></video>
            <!-- <button @click="emitKeepDelete"><i class="fas fa-trash"></i></button> -->
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