import { notesTestData } from '../../../../notesData.js';
import keepStorageService from '../../../services/storage-service.js'

const KEEP_KEY = 'keeps';
let gKeeps = [];

function query() {
  gKeeps = keepStorageService.load(KEEP_KEY);
  if (!gKeeps) {
    gKeeps = notesTestData;
    keepStorageService.store(KEEP_KEY, gKeeps);
  }
  return Promise.resolve(gKeeps);
}

function deleteKeepById(keepId) {
  console.log('hererererererererere');

  const keepIdx = getKeepIdx(keepId);
  gKeeps.splice(keepIdx, 1);
  keepStorageService.store(KEEP_KEY, gKeeps);
  return Promise.resolve(console.log(`${keepId} removed`))
}

function getKeepIdx(keepId) {
  return gKeeps.findIndex(keep => keep._id === keepId);
}


function deleteTodoByIdx(keepId, idx) { }


function markDoneTodoByIdx(keepId, idx) { }


export const keepService = {
  query,
  deleteKeepById,
  getKeepIdx,
  markDoneTodoByIdx,
  deleteTodoByIdx,
  deleteKeepById
}