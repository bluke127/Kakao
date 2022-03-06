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
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount, defineAsyncComponent, ref } from 'vue';
import CarouselItem from '@/components/Carousel/CarouselItem.vue';
import CarouselControls from '@/components/Carousel/CarouselControls.vue';
export default defineComponent({
  components: { CarouselItem, CarouselControls },
  props: {
    slides: { type: Array },
    picture: { type: Array },
    imgWidth: { type: Number },
  },
  setup(props) {
    const transitionName = ref('slide-in');
    const currentSlide = ref(0);
    const setCurrentSlide = index => {
      currentSlide.value = index;
    };
    const prev = () => {
      transitionName.value = 'slide-in';
      const index = currentSlide.value > 0 ? currentSlide.value - 1 : props.slides.length - 1;
      setCurrentSlide(index);
    };

    const next = () => {
      transitionName.value = 'slide-out';
      const index = currentSlide.value < props.slides.length - 1 ? currentSlide.value + 1 : 0;
      setCurrentSlide(index);
    };
    // let slideInterval;
    onMounted(() => {
      // slideInterval = setInterval(() => {
      //   if (!props.slides) return;
      //   const index = currentSlide.value < props.slides.length - 1 ? currentSlide.value + 1 : 0;
      //   setCurrentSlide(index);
      //   console.log(index);
      // }, 5000);
    });
    onBeforeMount(() => {
      // clearInterval(slideInterval);
    });
    return { currentSlide, next, prev, transitionName };
  },
});
</script>

<style scoped>
.test {
  position: fixed;
  width: 500px;
  height: 500px;
  background: red;
}
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
