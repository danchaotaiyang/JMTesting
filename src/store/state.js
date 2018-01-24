import {postMode} from '@/assets/js/config';

const state = {
    code: null,
    token: null,
    userInfo: null,
    params: postMode.params,
    paperType: 0,
    parts: [],
    paper: [],
    views: [],
    part: {},
    currentIndex: 1,
    hasAnswer: false,
    isAssignment: false,
    isStarted: false,
    isViewCard: false,
};

export default state;
