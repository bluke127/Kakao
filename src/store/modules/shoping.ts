import { Module, ActionContext, ActionTree } from 'vuex';
import { RootState } from '../index';

const state: { shopinglist: { [key: string]: string }[] } = {
  shopinglist: [],
};
export type shopingRootState = typeof state;

const mutations = {
  SET_SHOPINGLIST(state: shopingRootState, item: { [key: string]: string }): void {
    state.shopinglist.push(item);
  },
  DELETE_SHOPINGLIST(state: shopingRootState, index: number): void {
    // console.log(state.shopinglist, state.shopinglist.splice(index, 1));
    state.shopinglist.splice(index, 1);
  },
};
type Mutations = typeof mutations;
type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<shopingRootState, RootState>, 'commit'>;

export enum ActionTypes {
  SET_SHOPINGLIST = 'SET_SHOPINGLIST',
  DELETE_SHOPINGLIST = 'DELETE_SHOPINGLIST',
}
const actions: ActionTree<shopingRootState, RootState> = {
  [ActionTypes.SET_SHOPINGLIST](context: MyActionContext, item): void {
    context.commit('SET_SHOPINGLIST', item);
  },
  [ActionTypes.DELETE_SHOPINGLIST](context: MyActionContext, index): void {
    context.commit('DELETE_SHOPINGLIST', index);
  },
};

export const shoping: Module<shopingRootState, RootState> = {
  namespaced: true,
  actions,
  mutations,
  state,
};
