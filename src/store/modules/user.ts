import { Module, ActionContext, ActionTree } from 'vuex';
import { RootState } from '../index';

const state: { email: string; password: string; autoLogin: boolean } = {
  email: '',
  password: '',
  autoLogin: false,
};
export type userRootState = typeof state;

const mutations = {
  SET_EMAIL(state: userRootState, payload: string): void {
    state.email = payload;
  },
  SET_PASSWORD(state: userRootState, payload: string): void {
    state.password = payload;
  },
  SET_AUTO_LOGIN(state: userRootState, payload: boolean): void {
    state.autoLogin = payload;
  },
};
type UserMutations = typeof mutations;
type UserActionContext = {
  commit<K extends keyof UserMutations>(
    key: K,
    payload?: Parameters<UserMutations[K]>[1],
  ): ReturnType<UserMutations[K]>;
} & Omit<ActionContext<userRootState, RootState>, 'commit'>;

export enum ActionTypes {
  SET_EMAIL = 'SET_EMAIL',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_AUTO_LOGIN = 'SET_AUTO_LOGIN',
}
const actions: ActionTree<userRootState, RootState> = {
  [ActionTypes.SET_EMAIL](context: UserActionContext, payload: string): void {
    context.commit('SET_EMAIL', payload);
  },
  [ActionTypes.SET_PASSWORD](context: UserActionContext, payload: string): void {
    context.commit('SET_PASSWORD', payload);
  },
  [ActionTypes.SET_AUTO_LOGIN](context: UserActionContext, flag: boolean): void {
    context.commit('SET_AUTO_LOGIN', flag);
  },
};

export const user: Module<userRootState, RootState> = {
  namespaced: true,
  actions,
  mutations,
  state,
};
