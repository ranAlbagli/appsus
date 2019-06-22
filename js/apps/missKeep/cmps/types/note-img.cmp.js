export default {
	
	template: `
		<section 
			:style="{'background-color': keep.bgColor }">
            <p>{{keep.data.text}}</p>
			<img :src="keep.data.src"/>
		</section>
	`,
    props:['keep'],
    created(){

        console.log(this.keep);
        
    }
}