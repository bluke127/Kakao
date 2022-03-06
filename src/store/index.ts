import { createStore } from 'vuex';
import { menu, menuRootState } from './modules/menu';
import { user, userRootState } from './modules/user';
import { shoping, shopingRootState } from './modules/shoping';
import { popup, popupRootState } from './modules/popup';

export interface RootState {
  menu: menuRootState;
  user: userRootState;
  shoping: shopingRootState;
  popup: popupRootState;
}
export default createStore({
  modules: {
    menu,
    shoping,
    user,
    popup,
  },
});
