import noteVideo from './types/note-video.cmp.js';
import noteText from './types/note-text.cmp.js';
import noteMap from './types/note-map.cmp.js';
import noteTodo from './types/note-todo.cmp.js';
import noteAudio from './types/note-audio.cmp.js';
import noteImg from './types/note-img.cmp.js';




export default {
    template: `
        <section class="masonry container" >
                <component 
                v-for="(keep,idx) in keeps"
                :key="idx"
                :is="keep.settings.type" 
                :keep="keep" 
                :noteTypesInfo="noteTypes[keep.settings.type]"
                class="note ui-box"></component>
        </section>
        `,
    props: ['keeps','noteTypes'],
    created(){
       
        
    },
    components: {
        noteText,
        noteVideo,
        noteTodo,
        noteImg,
        noteMap,
        noteAudio
    }
}