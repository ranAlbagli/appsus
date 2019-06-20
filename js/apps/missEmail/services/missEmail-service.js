
import missEmailStorageService from './missEmail-storage-service.js'

const EMAILS_KEY = 'emails';
let gEmails =[];



function query() {
    gEmails = missEmailStorageService.load(BOOKS_KEY);
    if (!gEmails) {
      gEmails = generateEmails();
      issEmailStorageService.store(BOOKS_KEY, gBooks)
    }
    return Promise.resolve(gEmails);
  
  }


  export default {
    query,
  }
  