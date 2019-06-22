//imports
import homePage from './pages/homePage.js';
import emailApp from './apps/missEmail/pages/emailApp.cmp.js';
import emailDetails from './apps/missEmail/cmps/email-details.cmp.js'
import keepApp from './apps/missKeep/pages/keepApp.cmp.js'


export default [
  { path: '/', component: homePage },
  { path: '/keep', component: keepApp },
  { path: '/mail', component: emailApp },
  {
    path: '/mail/details', component: emailDetails,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      { path: '/', component: emailDetails },

    ]
  }
]
