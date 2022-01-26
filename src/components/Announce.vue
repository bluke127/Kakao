<template>
  <div>
    <AnnounceImg
      :picture="picture"
      :topImg="topImg"
      :title="title"
      :name="name"
      :imgWidth="500"
      :time="time"
    ></AnnounceImg>
    <AnnounceText :like="like" :title="title" :content="content"></AnnounceText>
    <Buy :buy="buy" v-if="buy"></Buy>
    <Reply v-if="reply" :data="reply"></Reply>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import AnnounceImg from '@/components/AnnounceImg.vue';
import AnnounceText from '@/components/AnnounceText.vue';
import Buy from '@/components/Buy.vue';
import Reply from '@/components/Reply.vue';
export default defineComponent({
  components: { AnnounceImg, AnnounceText, Buy, Reply },
  props: {
    topImg: { type: String, required: true },
    picture: { type: Array as PropType<string[]>, required: true },
    imgWidth: { type: Number, required: true, default: 640 },
    name: { type: String, required: true },
    time: { type: String, required: true },
    title: { type: String, required: true },
    like: { type: Number, required: true, default: 0 },
    content: { type: String, required: true },
    reply: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
    buy: { type: Array },
  },
});
</script>

<style></style>
