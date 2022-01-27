import { ActionContext, ActionTree } from 'vuex';

const state = {
  email: '',
  password: '',
  autoLogin: false,
};
type UserRootState = typeof state;

const mutations = {
  SET_EMAIL(state: UserRootState, payload: string): void {
    state.email = payload;
  },
  SET_PASSWORD(state: UserRootState, payload: string): void {
    state.password = payload;
  },
};
type UserMutations = typeof mutations;
type UserActionContext = {
  commit<K extends keyof UserMutations>(
    key: K,
    payload?: Parameters<UserMutations[K]>[1],
  ): ReturnType<UserMutations[K]>;
} & Omit<ActionContext<UserRootState, UserRootState>, 'commit'>;

export enum ActionTypes {
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_AUTO_LOGIN = 'SET_AUTO_LOGIN',
}
const actions = {
  [ActionTypes.SET_EMAIL](context: any, payload: string): void {
    context.commit('SET_EMAIL', payload);
  },
  [ActionTypes.SET_PASSWORD](context: any, payload: string): void {
    context.commit('SET_PASSWORD', payload);
  },
  [ActionTypes.SET_AUTO_LOGIN](context: any, flag: boolean): void {
    context.commit('SET_AUTO_LOGIN', flag);
  },
};

export const user = {
  namespaced: true,
  actions,
  mutations,
  state,
};
