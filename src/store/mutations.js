const mutations = {
    SET_PAPER_TYPE(state, paperType) {
        state.paperType = paperType;
    },
    SET_PARTS(state, parts) {
        state.parts = parts;
    },
    SET_PAPER(state, paper) {
        state.paper = paper;
    },
    SET_PART(state, part) {
        state.part = part;
    },
    SET_VIEWS(state, views) {
        state.views = views;
    },
    SET_CURRENT_INDEX(state, currentIndex) {
        state.currentIndex = currentIndex;
    },
    SET_STATUS_HAS_ANSWER(state, hasAnswer) {
        state.hasAnswer = hasAnswer;
    },
    SET_STATUS_HAS_REPORT(state, hasReport) {
        state.hasReport = hasReport;
    },
    SET_STATUS_STARTED(state, isStarted) {
        state.isStarted = isStarted;
    },
    SET_STATUS_ASSIGNMENT(state, isAssignment) {
        state.isAssignment = isAssignment;
    }
};

export default mutations;
