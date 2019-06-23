import { notesTestData } from '../../../../notesData.js';
import  utilService from '../../../services/utils-service.js'
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

function emptyKeep() {
	return {
		settings: {
			type: 'note-text',
			isPinned: false,
			isMarked: false,
			editMode: false,
        },
        bgColor:'',
		data: {},
	};
}


function deleteTodoByIdx(keepId, idx) { }


function markDoneTodoByIdx(keepId, idx) { }



function saveKeep(keep, data) {
    // console.log('here at service');
	if (!keep) Promise.reject();
	switch (keep.settings.type) {
		case 'note-text':
			keep.data.text = data;
			break;
		case 'note-image':
		case 'note-video':
		case 'note-audio':
			keep.data.src = data;
			break;
		case 'note-todo':
			let listArr = data.split(',');
			keep.data.todos = listArr.map(item => {
				return { text: item, completed: false };
			});
			break;
	}
	// Save data
	if (keep._id) {
        console.log(keep._id);   
		// Update existing note
		let keepIdx = gKeeps.findIndex(currKeep => currKeep._id === keep._id);
		gKeeps.splice(keepIdx, 1, keep);
	} else {
		// Add new note
		keep._id = utilService.makeId();
		gKeeps.unshift(keep);
	}
    keepStorageService.store(KEEP_KEY, gKeeps);
	return Promise.resolve(keep);
}


export const keepService = {
  query,
  deleteKeepById,
  getKeepIdx,
  markDoneTodoByIdx,
  deleteTodoByIdx,
  deleteKeepById,
  styleKeep,
  emptyKeep,
  saveKeep
}