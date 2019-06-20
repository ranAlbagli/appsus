
import missEmailStorageService from './missEmail-storage-service.js'
import {testData} from '../../../../data.js'

const EMAILS_KEY = 'emails';
let gEmails =[];



function query() {
    gEmails = missEmailStorageService.load(EMAILS_KEY);
    if (!gEmails) {
      gEmails = testData
      missEmailStorageService.store(EMAILS_KEY, gEmails)
    }
    return Promise.resolve(gEmails);
  }

  function howManyEmailsUnread(emails){
    let counter=0;
    emails.forEach((email)=>{
        if (email.isRead) counter ++
    })
    return counter
  }

  export  const missEmailService= {
    query,
    howManyEmailsUnread
  }
  