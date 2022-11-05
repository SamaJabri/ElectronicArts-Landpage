import functions from './functions.js';

// Header vars
const modalDOM = functions.qs("#user");
const openModalDOM = functions.qs("#openUserModal");

const openQuestionModalDOM = functions.qs("#openQuestionModal");
const modalQuestionDOM = functions.qs("#question");

const openAsideModalDOM = functions.qs("#btn-in");
const modalAsideDOM = functions.qs("#more");

const openNavModalDOM = functions.qs("#btn-btn");
const modalNavDOM = functions.qs("#vertical-line");

const blackBg = functions.qs("#black");

export default {
    modalDOM,
    modalAsideDOM,
    modalNavDOM,
    modalQuestionDOM,
    openModalDOM,
    openAsideModalDOM,
    openNavModalDOM,
    openQuestionModalDOM,
    blackBg
}