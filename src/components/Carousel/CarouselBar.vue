<template>
  <div class="bar_wrap">
    <ul class="bar_inner">
      <li
        v-for="(item, i) in slides"
        :key="i"
        :class="{ active: currentSlide === i }"
        @click="$emit('moveCarousel', i)"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, ref, onMounted } from 'vue';
export default defineComponent({
  props: {
    slides: { type: Array },
    currentSlide: { type: Number },
  },
});
</script>

<style lang="scss" scoped>
.bar_wrap {
  display: flex;
  justify-content: center;
  .bar_inner {
    margin: 16px auto 0;
    display: flex;
    li {
      width: 5px;
      height: 5px;
      margin-right: 5px;
      border-radius: 5px;
      background-color: lightgray;
      cursor: pointer;
      &.active {
        width: 15px;
        background-color: #000;
      }
    }
  }
}
</style>
