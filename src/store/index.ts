import { createStore } from 'vuex';
import { menu, menuRootState } from './modules/menu';
import { user, UserRootState } from './modules/user';

export interface RootState {
  menu: menuRootState;
  user: UserRootState;
}
export default createStore({
  modules: {
    menu,
    user,
  },
});
