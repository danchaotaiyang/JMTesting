import * as types from './mutation-types';

export const setReply = ({commit, state}, paper) => {
    commit(types.SET_PAPER, paper);
};
