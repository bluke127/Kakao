<template>
  <div class="carousel-item" v-show="currentSlide === index">
    <img :src="slide" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: { slide: { type: String }, currentSlide: { type: Number }, index: { type: Number } },
});
</script>

<style lang="scss" scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
