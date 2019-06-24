
import noteActionBar from '../note-action-bar.cmp.js'
import noteEdit  from '../note-edit.cmp.js'
export default {

    template: `
		<section 
			:style="{'background-color': keep.bgColor }">
            <p>{{keep.data.text}}</p>
            <div class="videoWrapper">
                <iframe 
                :width="1280" 
                :height="720" 
                :src="this.videoYoutubeUrl"
                frameborder="0" 
                allowfullscreen
                ></iframe>
            </div>            
            <note-action-bar :keep="keep" :noteTypesInfo="noteTypesInfo"  ></note-action-bar>
            <note-edit :keep="keep" v-if="keep.settings.editMode"></note-edit>
		</section>
	`,
    props: ['keep','noteTypesInfo'],
    created() {
    },
    methods: {
    },
    date() {
        return {
        }
    },
    computed: {
        // videoUrl() {
        //     var myYoutubeRegexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
        //     const id = this.keep.data.src;
        //     const url = `https://www.youtube.com/embed/${myYoutubeRegexp}`;
        //     return url;
        // },
        videoYoutubeUrl(){
            var myYoutubeRegexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
            const id = myYoutubeRegexp.exec(this.keep.data.src)[1]
            const url = `https://www.youtube.com/embed/${id}`;
            console.log(url, 'from component');
            	
            return url;
            
        }
        
    },
    mounted() {
    },
    components: {
        noteActionBar,
        noteEdit

    }
}