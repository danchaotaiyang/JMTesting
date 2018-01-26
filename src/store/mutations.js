import * as types from './mutation-types';

const mutations = {
    [types.SET_TYPE](state, paperType) {
        state.paperType = paperType;
    },
    [types.SET_PARTS](state, parts) {
        state.parts = parts;
    },
    [types.SET_PAPER](state, paper) {
        state.paper = paper;
        state.length = paper.length;
    },
    [types.SET_PART](state, part) {
        state.part = part;
    },
    [types.SET_VIEW](state, view) {
        state.view = view;
    },
    [types.SET_CURRENT_ORDER](state, currentOrder) {
        state.currentOrder = currentOrder;
    },
    [types.SET_CURRENT_INDEX](state, currentIndex) {
        state.currentIndex = currentIndex;
    },
    [types.SET_REMAINING](state, remaining) {
        state.remaining = remaining;
    },
    [types.SET_STATUS_HAS_ANSWER](state, hasAnswer) {
        state.hasAnswer = hasAnswer;
    },
    [types.SET_STATUS_HAS_REPORT](state, hasReport) {
        state.hasReport = hasReport;
    },
    [types.SET_STATUS_STARTED](state, isStarted) {
        state.isStarted = isStarted;
    },
    [types.SET_STATUS_ASSIGNMENT](state, isAssignment) {
        state.isAssignment = isAssignment;
    },
    [types.SET_STATUS_PAPER](state, isPaper) {
        state.isPaper = isPaper;
    },
    [types.SET_STATUS_CHOOSE](state, choose) {
        state.choose = choose;
    },
    [types.SET_STATUS_KEEP](state, isKeep) {
        state.isKeep = isKeep;
    }
};

export default mutations;
