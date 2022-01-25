<template>
  <div>
    {{ replyValue }}
    <base-input :placeholder="placeholder" v-model="replyValue"></base-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseInput from './BaseInput.vue';
export default defineComponent({
  components: { BaseInput },
  props: { data: { type: Array } },
  setup() {
    const placeholder = '댓글을 남겨주세요.';
    const replyValueTest = (e: string) => {
      console.log(e);
    };
    const replyValue = ref<string>('');
    return { placeholder, replyValueTest, replyValue };
  },
});
</script>

<style></style>
