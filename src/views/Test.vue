<template>
  <div>
    터키터키
    <div class="carousel">
      <div class="carousel_inner">
        <transition
          name="trasnsitionEffect"
          v-for="(slide, index) in picture"
          :key="`item-${index}`"
        >
          <div class="carousel-item" v-show="currentSlide === index">
            <img :src="slide" />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, ref, onMounted } from "vue";
export default defineComponent({
  props: {
    picture: { type: Array },
    imgWidth: { type: Number },
  },
  setup(props) {
    const currentSlide = ref(0);
    return { currentSlide };
  },
});
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel_inner {
  position: relative;
  width: 900px;
  height: 400px;
  overflow: hidden;
}
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
</style>
