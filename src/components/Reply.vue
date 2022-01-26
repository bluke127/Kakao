<template>
  <div>
    <div class="store_wrap">
      <p class="reply_count">댓글 {{ data.length }}개</p>
      <div v-for="(e, i) in data" :key="i">{{ e }}</div>
    </div>
    <div class="insert_wrap">
      <base-input
        class="reply_insert"
        :placeholder="placeholder"
        v-model="modelValue"
      ></base-input>
    </div>
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
    const modelValue = ref<string>('');
    return { placeholder, replyValueTest, modelValue };
  },
});
</script>

<style lang="scss" scoped>
.reply_insert {
  position: relative;
  padding: 13px 62px 13px 14px;
  border-radius: 0 24px 24px 24px;
  background-color: #f2f2f2;
  ::v-deep input {
    display: block;
    width: 100%;
    height: 20px;
    border: 0;
    line-height: 20px;
    background-color: transparent;
    resize: none;
  }
}
.store_wrap {
  line-height: 20px;
  color: #909092;
  div {
    line-height: 40px;
    font-size: 15px;
  }
}
</style>
