import { keepService } from '../services/keepService.js';



export default {
    template: `
        <section>
            <h1>this is keep app</h1>
            <pre>{{this.keeps}}</pre>
        </section>`,
    data() {
        return {
            keeps: [],
        }
    },
    created() {
        keepService.query().then((res) => {
            this.keeps = res;
        })
    }
}