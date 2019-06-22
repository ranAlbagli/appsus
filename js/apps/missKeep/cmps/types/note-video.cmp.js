

export default {
	
	template: `
		<section 
			:style="{'background-color': keep.bgColor }">
            <p>{{keep.data.text}}</p>
			<video :src="keep.data.src" controls ></video>
		</section>
	`,
    props:['keep'],
    created(){

        console.log(this.keep);
        
    }
}