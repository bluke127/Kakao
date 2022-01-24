<template>
  <div>
    <div class="like">좋아요 {{ like }}명</div>
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    like: { type: Number },
    title: { type: String },
    content: { type: String },
  },
});
</script>

<style lang="scss">
.like {
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
}
.title {
  display: block;
  padding-top: 10px;
  font-size: 20px;
  line-height: 24px;
  word-break: break-all;
}
.content {
  padding-top: 8px;
  line-height: 20px;
  word-break: break-all;
  white-space: pre-line;
}
</style>
