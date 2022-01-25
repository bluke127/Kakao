<template>
  <div>
    <ul class="tabs">
      <li
        v-for="(e, i) in tabsCate"
        :key="i"
        class="tab"
        :class="[e.index, borderBase === i ? 'getBorder' : '']"
        @click="setBorder(i)"
      >
        {{ e.name }}
      </li>
      <li class="hide_border" :style="{ left: `calc(25%*${borderBase})` }"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, ref } from 'vue';
// import type { tabsCateType } from '@/layout/Header.vue';
export default defineComponent({
  props: {
    cate: { type: Array },
  },
  setup(props) {
    const tabsCate = toRef(props, 'cate');
    const borderBase = ref<number>(0);
    const setBorder = (index: number) => {
      borderBase.value = index;
    };
    return { tabsCate, setBorder, borderBase };
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
