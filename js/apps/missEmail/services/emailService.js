
import emailStorageService from './emailStorageService.js'
import { testData } from '../../../../data.js'

const EMAILS_KEY = 'emails';
let gEmails = [];



function query() {
  gEmails = emailStorageService.load(EMAILS_KEY);
  if (!gEmails) {
    gEmails = testData
    emailStorageService.store(EMAILS_KEY, gEmails)
  }
  return Promise.resolve(gEmails);
}

function howManyEmailsUnread(emails) {
  let counter = 0;
  emails.forEach((email) => {
    if (email.isRead) counter++
  })
  return counter
}

function addEmail(email){
  console.log(email);
  
  // email.id = makeId()
  // gEmails.push(email)
  // storageService.store(EMAILS_KEY, gEmails)

}

export const emailService = {
  query,
  howManyEmailsUnread,
  addEmail
}
