<template>
  <div class="header">
    <div class="header_top">
      <div class="side_show" @click="ShowSideMenuFlag"></div>
      <h1>
        <img :src="require('@/assets/image/logo_kakaofriends.png')" alt="" />
      </h1>
    </div>
    <Tabs :propsTabsCategory="tabsCategory"></Tabs>
    <SideMenu v-if="sideFlag"></SideMenu>
  </div>
</template>

<script lang="ts">
import SideMenu from '@/components/SideMenu.vue';
import Tabs from '@/components/Tabs.vue';
import { useStore } from 'vuex';
import { computed, defineComponent, ref } from 'vue';
export type tabsCateType = { name: string; index: string; routeName?: string };
export default defineComponent({
  components: { Tabs, SideMenu },
  setup() {
    const store = useStore();
    const sideFlag = computed(() => {
      return store.state.menu.ShowSideMenuFlag;
    });
    const tabsCategory = ref<tabsCateType[]>([
      { name: '오늘', index: 'first', routeName: 'today' },
      { name: '신규', index: 'second', routeName: 'fresh' },
      { name: '인기', index: 'third', routeName: 'popular' },
      { name: '마이', index: 'fourth' },
    ]);
    const ShowSideMenuFlag = () => {
      store.dispatch('menu/SET_SIDEMENU', true);
    };
    return { ShowSideMenuFlag, tabsCategory, sideFlag };
  },
});
</script>

<style lang="scss">
.header {
  width: 100%;
  padding-top: 10px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  .side_show {
    width: 24px;
    height: 24px;
    background: url('~@/assets/icon/gather.png') 0 0 no-repeat;
    background-size: 700px 600px;
    background-position: $hamburger;
    position: absolute;
    left: 0;
    top: 10px;
    cursor: pointer;
  }
  h1 {
    width: 147px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
</style>
