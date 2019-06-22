import noteVideo from './types/note-video.cmp.js';
import noteText from './types/note-text.cmp.js';
import noteMap from './types/note-map.cmp.js';
import noteTodo from './types/note-todo.cmp.js';
import noteAudio from './types/note-audio.cmp.js';
import noteImg from './types/note-img.cmp.js';



export default {
    template: `
    <section >
        <div v-for="(keep,idx) in keeps">
            <component :is="keep.settings.type"></component>
        </div>
    </section>
    `,
      
    props: ['keeps'],
    created(){
        console.log(this.keeps);
        
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