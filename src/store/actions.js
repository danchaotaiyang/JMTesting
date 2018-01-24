import * as types from './mutation-types';

export const initData = ({commit, state}) => {
    commit(types.SET_PARTS, []);
    commit(types.SET_PAPER, []);
    commit(types.SET_VIEWS, []);
};
