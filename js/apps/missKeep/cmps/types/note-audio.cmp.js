
import { bus, KEEP_DELETE } from '../../../../services/eventBus-service.js'
export default {
	
	template: `
		<section 
			:style="{'background-color': keep.bgColor }">
            <p>{{keep.data.text}}</p>
			<audio  controls :src="keep.data.src"></audio>
            <button @click="emitKeepDelete"><i class="fas fa-trash"></i></button>
		</section>
	`,
    props:['keep'],
    created(){

        console.log(this.keep);
        
    },
    methods: {
        emitKeepDelete() {
            bus.$emit(KEEP_DELETE, this.keep._id);
        },
    },
}