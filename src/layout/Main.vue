<template>
  <div class="main_wrap">
    <SideMenu v-if="sideFlag"></SideMenu>
    <MainHeader class="header_wrap" @setSideFlag="setSideFlag"></MainHeader>
    <main><slot></slot></main>
    <MainFooter></MainFooter>
  </div>
</template>

<script lang="ts">
import MainHeader from '@/components/Header.vue';
import MainFooter from '@/components/Footer.vue';
import SideMenu from '@/components/SideMenu.vue';
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  components: { MainHeader, MainFooter, SideMenu },
  setup() {
    const store = useStore();
    const sideFlag = computed(() => {
      return store.state.menu.ShowSideMenuFlag;
    });
    const setSideFlag = () => {
      store.dispatch('menu/SET_SIDEMENU', true);
    };
    return { setSideFlag, sideFlag };
  },
});
</script>

<style lang="scss">
.main_wrap {
  width: 640px;
  margin: 87px auto 0;
  .header_wrap {
    width: 640px;
    position: fixed;
    top: 0;
    z-index: 1;
  }
}
</style>
