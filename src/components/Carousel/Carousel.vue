<template>
  <div>
    터키터키
    <div class="carousel">
      <div class="carousel_inner">
        <!-- <transition
          name="trasnsitionEffect"
          v-for="(slide, index) in picture"
          :key="`item-${index}`"
        >
          <div class="carousel-item" v-show="currentSlide === index">
            <img :src="slide" />
          </div>
        </transition> -->
        <CarouselItem
          v-for="(slide, index) in slides"
          :key="`item-${index}`"
          :current-slide="currentSlide"
          :slide="slide"
          :index="index"
          :name="transitionName"
        ></CarouselItem>
        <CarouselControls @prev="prev" @next="next" />
      </div>
      <CarouselBar @moveCarousel="moveCarousel" :slides="slides" :current-slide="currentSlide" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeMount, defineAsyncComponent, ref } from 'vue';
import CarouselItem from '@/components/Carousel/CarouselItem.vue';
import CarouselControls from '@/components/Carousel/CarouselControls.vue';
import CarouselBar from '@/components/Carousel/CarouselBar.vue';
export default defineComponent({
  components: { CarouselItem, CarouselControls, CarouselBar },
  props: {
    slides: { type: Array },
    picture: { type: Array },
    imgWidth: { type: Number },
  },
  setup(props) {
    const transitionName = ref('slide-in');
    const currentSlide = ref<number>(0);
    const setCurrentSlide = (index: number) => {
      currentSlide.value = index;
    };
    const prev = () => {
      transitionName.value = 'slide-in';
      if (!props.slides) {
        return;
      }
      const index = currentSlide.value > 0 ? currentSlide.value - 1 : props.slides.length - 1;
      setCurrentSlide(index);
    };

    const next = () => {
      transitionName.value = 'slide-out';
      if (!props.slides) {
        return;
      }
      const index = currentSlide.value < props.slides.length - 1 ? currentSlide.value + 1 : 0;
      setCurrentSlide(index);
    };
    const moveCarousel = (toIndex: number) => {
      if (currentSlide.value < toIndex) {
        next();
      } else if (currentSlide.value > toIndex) {
        prev();
      } else if (currentSlide.value === toIndex) {
        return;
      }
      if (Math.abs(toIndex) - Math.abs(currentSlide.value) > 1) {
        setTimeout(() => {
          moveCarousel(toIndex);
        }, 500);
      }
    };
    return { currentSlide, next, prev, moveCarousel, transitionName };
  },
});
</script>

<style scoped lang="scss">
.test {
  position: fixed;
  width: 500px;
  height: 500px;
  background: red;
}
.carousel {
  padding-bottom: 50px;
  position: relative;
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

.slide-in-enter,
.slide-in-leave {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}

.bar_wrap {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;

  .bar_inner {
    margin: 16px auto 0;
    display: flex;
    // justify-content: space-evenly;
    li {
      height: 5px;
      width: 5px;
      margin-right: 5px;
      border-radius: 5px;
      background-color: lightgray;
      &.active {
        width: 15px;
        background-color: #000;
      }
    }
  }
}
</style>
