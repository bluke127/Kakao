import Vuex, { StoreOptions, ActionContext } from 'vuex';

const state = {
  ShowSideMenuFlag: false,
};
export type RootState = typeof state;

const mutations = {
  SET_SIDEMENU(state: RootState, flag: boolean) {
    state.ShowSideMenuFlag = flag;
  },
};
export type Mutations = typeof mutations;
type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

const actions = {
  SET_SIDEMENU(context: MyActionContext, flag: boolean) {
    context.commit('SET_SIDEMENU', flag);
  },
};

export const menu = {
  namespaced: true,
  mutations,
  state,
  actions,
};
