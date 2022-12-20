const state = {
    isCollapse:false
}

const mutations = {
    TOGGLE_SIDERBAR:state=>{
        state.isCollapse=!state.isCollapse
    }
}

const actions = {
    toggleSidBar({commit}){
        commit('TOGGLE_SIDERBAR')
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
