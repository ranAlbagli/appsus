
import { bus, KEEP_DELETE } from '../../../../services/eventBus-service.js'
export default {
	
	template: `
		<section 
			:style="{'background-color': keep.bgColor }">
            <p>{{keep.data.text}}</p>
			<img :src="keep.data.src" width="100%"/>
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