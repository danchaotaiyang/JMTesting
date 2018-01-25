import * as types from './mutation-types';

export const initData = ({commit, state}) => {
    commit(types.SET_PARTS, []);
    commit(types.SET_PAPER, []);
    commit(types.SET_VIEW, []);
    commit(types.SET_CURRENT_INDEX, localStorage.getItem('currentIndex') || 1);
};
