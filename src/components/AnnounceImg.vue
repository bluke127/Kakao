<template>
  <div class="announce_wrap">
    <div class="title">
      <div class="title_inner">
        <div class="top_img"><img :src="topImg" /></div>
        <div class="top_text">
          <p class="name">{{ name }}</p>
          <p class="time">{{ time }}</p>
        </div>
      </div>
      <div>
        <SlideWindow :picture="picture" :imgWidth="500" />
        <Carousel :sliders="picture" :imgWidth="500" />
        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SlideWindow from '@/components/SlideWindow.vue';
import Carousel from '@/components/Carousel.vue';
export default defineComponent({
  components: { SlideWindow, Carousel },
  props: {
    topImg: { type: String },
    picture: { type: Array, default: () => ['가', '나', '다'] },
    imgWidth: { type: Number },
    name: { type: String },
    time: { type: String },
    title: { type: String },
  },
});
</script>

<style lang="scss">
// .title {
//   padding-bottom: 16px;
// }
.title_inner {
  display: flex;
  align-content: center;
  .top_img {
    width: 40px;
    margin-right: 10px;
    border-radius: $border-radius-small-img;
    overflow: hidden;
    display: inline-block;
    img {
      width: 100%;
    }
  }
  .top_text {
    display: inline-block;
    p {
      height: 50%;
      font-size: 16px;
      display: flex;
      align-items: center;
      &.name {
        font-weight: bold;
      }
      &.time {
        color: #909092;
        font-size: 13px;
      }
    }
  }
}
</style>
