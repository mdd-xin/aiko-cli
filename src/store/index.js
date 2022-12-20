import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './module/app';
import tags from './module/tags';
import user from './module/user';

const store = new Vuex.Store({
  modules: {
    app,
    tags,
    user,
  },
});

export default store;
