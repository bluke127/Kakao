import { ActionContext, ActionTree } from 'vuex';

const state = {
  ShowSideMenuFlag: false,
};
type RootState = typeof state;

const mutations = {
  SET_SIDEMENU(state: RootState, flag: boolean): void {
    state.ShowSideMenuFlag = flag;
  },
};
type Mutations = typeof mutations;
type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

export enum ActionTypes {
  SET_SIDEMENU = 'SET_SIDEMENU',
}
const actions = {
  [ActionTypes.SET_SIDEMENU](context: any, flag: boolean): void {
    context.commit('SET_SIDEMENU', flag);
  },
};

export const menu = {
  namespaced: true,
  actions,
  mutations,
  state,
};
