const state = {
  token: localStorage.getItem('token'),
};

const mutations = {
  SET_TOEKN(state, val) {
    state.token = val;
  },
};

const actions = {
  login({ commit }, val) {
    commit('SET_TOEKN', val);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
