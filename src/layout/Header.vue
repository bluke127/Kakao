<template>
  <div class="header">
    <div class="header_top">
      <Side
        ><template v-slot:side_show
          ><div class="side_show" @click="ShowSideMenuFlag"></div></template
      ></Side>
      <h1><img :src="require('@/assets/image/logo_kakaofriends.png')" alt="" /></h1>
    </div>
    <Tabs :cate="tabsCate"></Tabs>
  </div>
</template>

<script lang="ts">
import Side from '@/components/SideMenuForm.vue';
import Tabs from '@/components/Tabs.vue';
import { useStore } from 'vuex';
import { computed, defineComponent, onMounted, ref } from 'vue';
export type tabsCateType = { name: string; index: string };
export default defineComponent({
  components: { Side, Tabs },
  setup() {
    const store = useStore();
    computed(() => {
      return store.state.menu;
    });
    const tabsCate = ref<tabsCateType[]>([
      { name: '오늘', index: 'first' },
      { name: '신규', index: 'second' },
      { name: '인기', index: 'third' },
      { name: '마이', index: 'fourth' },
    ]);
    const ShowSideMenuFlag = () => {
      // console.log(menu, '체크');
      console.log(store.state.menu.ShowSideMenuFlag);
      store.commit('menu/SET_SIDEMENU', true);
      // store.menu.commit('SET_SIDEMENU', true);
    };
    onMounted(() => {});
    return { ShowSideMenuFlag, tabsCate };
  },
});
</script>

<style lang="scss">
.header {
  width: 100%;
  padding-top: 10px;
  overflow: hidden;
  position: relative;
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
