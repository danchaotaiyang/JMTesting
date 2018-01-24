import * as types from './mutation-types';

const mutations = {
    [types.SET_PAPER_TYPE](state, paperType) {
        state.paperType = paperType;
    },
    [types.SET_PARTS](state, parts) {
        state.parts = parts;
    },
    [types.SET_PAPER](state, paper) {
        state.paper = paper;
    },
    [types.SET_VIEWS](state, views) {
        state.views = views;
    },
    [types.SET_PART](state, part) {
        state.part = part;
    },
    [types.SET_CURRENT_INDEX](state, currentIndex) {
        state.currentIndex = currentIndex;
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
    [types.SET_STATUS_VIEW_CARD](state, isViewCard) {
        state.isViewCard = isViewCard;
    }
};

export default mutations;
