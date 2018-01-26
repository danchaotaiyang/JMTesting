import {postMode} from '@/assets/js/config';

const state = {
    code: null,
    token: null,
    userInfo: null,
    paperType: 0,
    parts: [],
    paper: [],
    length: 0,
    part: {},
    view: [],
    currentOrder: 1,
    currentIndex: 1,
    hasAnswer: false,
    isAssignment: false,
    isStarted: false,
    isViewCard: false,
    choose: true
};

export default state;
