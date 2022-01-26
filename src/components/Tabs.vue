<template>
  <div>
    <ul class="tabs">
      <li
        v-for="(category, index) in tabsCategory"
        :key="index"
        class="tab"
        :class="[category.index, borderBase === index ? 'getBorder' : '']"
        @click="[setBorder(index), routerPush(category.routeName)]"
      >
        {{ category.name }}
      </li>
      <li class="hide_border" :style="{ left: `calc(25%*${borderBase})` }"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, toRef, ref } from 'vue';
export default defineComponent({
  props: {
    propsTabsCategory: { type: Array },
  },
  setup(props) {
    const tabsCategory = toRef(props, 'propsTabsCategory');
    const borderBase = ref<number>(0);
    const setBorder = (index: number) => {
      borderBase.value = index;
    };
    const routerPush = (name: string) => {
      console.log(name);
      router.push({ path: `/tabs/${name}` });
    };

    return { tabsCategory, setBorder, borderBase, routerPush };
  },
});
</script>

<style lang="scss">
.tabs {
  width: 100%;
  padding-top: 10px;
  display: flex;
  background-color: #fff;
  .tab {
    line-height: 40px;
    flex-basis: 25%;
    text-align: center;
    font-size: 16px;
    position: relative;
  }
  .hide_border {
    width: 25%;
    height: 2px;
    background-color: #434343;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: left 0.2s ease;
  }
}
</style>
