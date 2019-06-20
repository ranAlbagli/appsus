
import emailStorageService from './emailStorageService.js'
import { testData } from '../../../../data.js'
import utilService from '../../../services/utils-service.js'

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

function addEmail(email) {
  const newEmail= createEmail(email)
  console.log(newEmail);
  
  gEmails.unshift(newEmail)
  emailStorageService.store(EMAILS_KEY, gEmails)

}

function findEmailById(emailId) {
  const email = gEmails.find(email => { email._id === emailId })
  return Promise.resolve(email);
}

function deleteEmailById(emailId) {
  const emailIdx = getEmailIdx(emailId);
  gEmails.splice(emailIdx, 1);
  emailStorageService.store(EMAILS_KEY, gEmails);
  Promise.resolve(console.log(`${emailId} removed`))
}
function setReadUnread(emailId) {
  const emailIdx = getEmailIdx(emailId);
  let mark = gEmails[emailIdx].isRead ? false : true;
  gEmails[emailIdx].isRead = mark;
  emailStorageService.store(EMAILS_KEY, gEmails);
  Promise.resolve(console.log(`${emailId} read=${mark}`))
}

function getEmailIdx(emailId) {
  return gEmails.findIndex(email => { email._id === emailId });
}

function createEmail(email){

  return {
    "_id": utilService.makeId(24),
    "subject": email.subject,
    "body": email.body,
    "isRead": false,
    "sentAt": Date.now()
   
  }
}
export const emailService = {
  query,
  howManyEmailsUnread,
  addEmail,
  findEmailById,
  deleteEmailById,
  setReadUnread,
  createEmail
}
