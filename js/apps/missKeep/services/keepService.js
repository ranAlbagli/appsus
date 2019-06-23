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
  const keepIdx = getKeepIdx(keepId);
  gKeeps.splice(keepIdx, 1);
  keepStorageService.store(KEEP_KEY, gKeeps);
  return Promise.resolve(console.log(`${keepId} removed`))
}

function getKeepIdx(keepId) {
  return gKeeps.findIndex(keep => keep._id === keepId);
}

function getKeepById(id) {
	let keep = gKeeps.find(keep=> keep._id === id);
	return Promise.resolve(keep);
}


function styleKeep(id, bgColor) {
    return getKeepById(id)
    .then(keep => {
        keep.bgColor = bgColor;
        keepStorageService.store(KEEP_KEY, gKeeps);
    });
}


function deleteTodoByIdx(keepId, idx) { }


function markDoneTodoByIdx(keepId, idx) { }


export const keepService = {
  query,
  deleteKeepById,
  getKeepIdx,
  markDoneTodoByIdx,
  deleteTodoByIdx,
  deleteKeepById,
  styleKeep
}