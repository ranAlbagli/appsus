
export default {
	
	template: `
		<section 
			:style="{'background-color': keep.bgColor }">
            <p>{{keep.data.text}}</p>
			<audio :src="keep.data.src"></audio>
		</section>
	`,
    props:['keep'],
    created(){

        console.log(this.keep);
        
    }
}