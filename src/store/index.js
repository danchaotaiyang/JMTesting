import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

import createlogger from 'vuex/dist/logger';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
    state, getters, mutations, actions,
    strict: debug,
    plugins: debug ? [createlogger()] : []
});

