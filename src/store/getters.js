export const type = state => state.paperType;
export const parts = state => state.parts;
export const paper = state => state.paper;
export const length = state => state.length;
export const part = state => state.part;
export const view = state => state.view;
export const currentOrder = state => state.currentOrder;
export const currentIndex = state => state.currentIndex;
export const remaining = state => {
    return state.remaining || type ? 60 : 90;
};
export const hasAnswer = state => state.hasAnswer;
export const hasReport = state => state.hasReport;
export const isAssignment = state => state.isAssignment;
export const isViewCard = state => state.isViewCard;
