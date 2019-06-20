
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


  export  const missEmailService= {
    query,
  }
  