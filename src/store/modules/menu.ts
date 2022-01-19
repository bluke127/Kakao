const state = {
  showSideMenu: false,
};
export type RootState = typeof state;
export type RootMutation = typeof mutations;
// const SET_SIDEMENU = { SET_SIDEMENU: 'SET_SIDEMENU' };

const mutations = {
  SET_SIDEMENU(state: RootState, flag: boolean) {
    state.showSideMenu = flag;
  },
};

export default {
  namespaced: true,
  mutations,
  state,
};
