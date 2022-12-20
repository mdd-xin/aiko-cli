const tags = {
  namespaced: true,
  state: {
    visitedViews: [],
  },
  mutations: {
    ADD_VISITED_VIEW(state, tag) {
      // 筛选=>如果visitedViews已经存在该tag,则不再添加
      if (state.visitedViews.some((hist) => hist.path == tag.path)) return;
      state.visitedViews.push(tag);
    },
    DEL_VISITED_VIEW(state, tag) {
      const index = state.visitedViews.findIndex(
        (hist) => hist.path == tag.path
      );
      console.log('index', index);
      state.visitedViews.splice(index, 1);
    },
  },
  actions: {
    addView({ commit }, tag) {
      commit('ADD_VISITED_VIEW', tag);
    },
    delView({ commit }, tag) {
      commit('DEL_VISITED_VIEW', tag);
    },
  },
};

export default tags;
