//imports
import homePage from './pages/homePage.js';
import missEmailAppCmp from './apps/missEmail/pages/missEmail-app.cmp.js';


export default [
    { path: '/', component: homePage },
    { path: '/mail', component: missEmailAppCmp },

]
