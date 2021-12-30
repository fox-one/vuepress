const state = {
  sidebar: false
};

const mutations = {
  SET_SIDEBAR(state, value) {
    state.sidebar = value;
  }
};

export default {
  namespace: true,
  state,
  mutations
};
