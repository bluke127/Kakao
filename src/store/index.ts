import { createStore } from 'vuex';
import { menu, menuRootState } from './modules/menu';
import { user, UserRootState } from './modules/user';
import { shoping, shopingRootState } from './modules/shoping';

export interface RootState {
  menu: menuRootState;
  user: UserRootState;
  shopinglist: shopingRootState;
}
export default createStore({
  modules: {
    menu,
    shoping,
    user,
  },
});
