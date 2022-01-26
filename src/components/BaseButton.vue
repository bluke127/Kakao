<template>
  <!-- <div class="button"> -->
  <button :style="style" @click="$emit('btnClick')"><slot name="msg"></slot></button>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { buttonStyleType } from '@/views/Login.vue';
export default defineComponent({
  props: {
    style: { type: Object as PropType<buttonStyleType>, required: true },
  },
});
</script>

<style lang="scss" scoped>
button {
  vertical-align: middle;
}
</style>
