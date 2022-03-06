import { Module, ActionContext, ActionTree } from 'vuex';
import { RootState } from '../index';

const state: { shopinglist: { [key: string]: string }[] } = {
  shopinglist: [],
};
export type shopingListRootState = typeof state;

const mutations = {
  SET_SHOPINGLIST(state: shopingListRootState, item: { [key: string]: string }): void {
    state.shopinglist.push(item);
  },
};
type Mutations = typeof mutations;
type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<shopingListRootState, RootState>, 'commit'>;

export enum ActionTypes {
  SET_SHOPINGLIST = 'SET_SHOPINGLIST',
}
const actions: ActionTree<shopingListRootState, RootState> = {
  [ActionTypes.SET_SHOPINGLIST](context: MyActionContext, item): void {
    context.commit('SET_SHOPINGLIST', item);
  },
};

export const shopinglist: Module<shopingListRootState, RootState> = {
  namespaced: true,
  actions,
  mutations,
  state,
};
