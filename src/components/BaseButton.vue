<template>
  <div class="button">
    <button :style="style"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { buttonStyleType } from '@/views/Login.vue';
export default defineComponent({
  props: { style: { type: Object as PropType<buttonStyleType>, required: true } },
  setup() {},
});
</script>

<style lang="scss" scoped></style>
