<template>
  <!-- <div class="button"> -->
  <button v-bind="$attrs" :style="style">
    <slot></slot>
  </button>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, PropType, CSSProperties } from 'vue';
export default defineComponent({
  inheritAttrs: false,
  props: {
    style: { type: Object as PropType<CSSProperties>, required: false },
  },
});
</script>

<style lang="scss" scoped>
button {
  vertical-align: middle;
}
</style>
