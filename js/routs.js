//imports
import homePage from './pages/homePage.js';
import emailApp from './apps/missEmail/pages/emailApp.cmp.js';


export default [
    { path: '/', component: homePage },
    { path: '/mail', component: emailApp },

]
