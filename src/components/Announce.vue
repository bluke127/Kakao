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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AnnounceImg from '@/components/AnnounceImg.vue';
import AnnounceText from '@/components/AnnounceText.vue';
export default defineComponent({
  components: { AnnounceImg, AnnounceText },
  props: {
    topImg: { type: String },
    picture: { type: Array, default: () => ['가', '나', '다'] },
    imgWidth: { type: Number },
    name: { type: String },
    time: { type: String },
    title: { type: String },
    like: { type: Number },
    content: { type: String },
  },
});
</script>

<style></style>
