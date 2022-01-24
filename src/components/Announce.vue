<template>
  <div class="announce_wrap">
    ㄴㄴ
    <div class="title">
      <div class="title_img">
        <img :src="topImg" />
        <div>
          <p>{{ name }}</p>
          <p>시간</p>
        </div>
      </div>
      <div>
        <SlideWindow :picture="pictures" :imgWidth="500" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideWindow from '@/components/SlideWindow.vue';
export default defineComponent({
  components: { SlideWindow },
  props: {
    topImg: { type: String },
    picture: { type: Array, default: () => ['가', '나', '다'] },
    imgWidth: { type: Number },
    name: { type: String },
  },
  setup() {},
});
</script>

<style></style>
