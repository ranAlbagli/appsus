'use strict'

import theRoutes from './routs.js'
const appRouter = new VueRouter({ routes: theRoutes })


import appHeader from './cmps/app-header.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'

var app = new Vue({
    el: '#app',
    created() {
        console.log('App has been Created!');
    },
    template: `
        <div>
            <app-header></app-header>
            <main><router-view></router-view></main>
            <app-footer></app-footer>
        </div>
    `,
    components: {
        appHeader,
        appFooter
    },
    methods: {
    },
    router: appRouter
})