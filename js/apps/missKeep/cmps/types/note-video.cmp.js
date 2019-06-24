
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
                :src="this.keep.data.src"
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
    },
    mounted() {
    },
    components: {
        noteActionBar,
        noteEdit

    }
}