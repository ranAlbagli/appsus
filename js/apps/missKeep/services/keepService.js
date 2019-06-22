import { notesTestData } from '../../../../notesData.js';
import keepStorageService from '../../../services/storage-service.js'

const KEEP_KEY = 'keeps';
let gKeeps = [];

function query() {
    gKeeps = keepStorageService.load(KEEP_KEY);
    if (!gKeeps) {
        gKeeps = notesTestData;
        keepStorageService.store(KEEP_KEY,gKeeps);
    }
    return Promise.resolve(gKeeps);
}




export const keepService ={
    query
}