import { createStore } from 'vuex';
import { menu, menuRootState } from './modules/menu';
import { user, UserRootState } from './modules/user';
import { shopinglist, shopingListRootState } from './modules/shopingList';

export interface RootState {
  menu: menuRootState;
  user: UserRootState;
  shopinglist: shopingListRootState;
}
export default createStore({
  modules: {
    menu,
    shopinglist,
    user,
  },
});
