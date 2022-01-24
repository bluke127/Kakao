<template>
  <div class="scene" :style="{ width: `${imgWidth}px` }">
    <ul class="entire" ref="entire">
      <li
        class="picture"
        v-for="(e, i) in pictures"
        :key="i"
        :ref="imgsPush"
        :style="{ width: `${imgWidth}px` }"
      >
        <img :src="e" />
      </li>
    </ul>
    <div class="arrow left" @click="prev($event)">&lt;</div>
    <div class="arrow right" @click="next($event)">&gt;</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, ref, onMounted } from 'vue';
export default defineComponent({
  props: {
    picture: { type: Array },
    imgWidth: { type: Number },
  },
  setup(props) {
    const pictures = toRef(props, 'picture');
    const imgWidths = toRef(props, 'imgWidth');
    const imgs = ref<HTMLElement[]>([]);
    const controlSlide = ref<number>(0);

    const imgsPush = (el: HTMLElement) => {
      imgs.value.push(el);
    };
    const entire = ref<HTMLElement | null>(null);
    const next = (e: Event) => {
      console.log(e.target);
      if (entire.value instanceof HTMLElement) {
        controlSlide.value--;
        if (props.imgWidth) {
          entire.value.style.marginLeft = `${
            parseInt(entire.value.style.marginLeft) - props.imgWidth
          }px`;
          entire.value?.append(imgs.value[0]);
          entire.value.style.transform = `translateX(${
            -parseInt(entire.value.style.marginLeft) - props.imgWidth
          }px)`;
          imgs.value.push(imgs.value[0]);
          imgs.value.shift();
          console.log(imgs.value[0]);
        }
      }
    };
    const prev = () => {
      if (entire.value instanceof HTMLElement) {
        controlSlide.value++;
        if (props.imgWidth) {
          entire.value.style.marginLeft = `${
            parseInt(entire.value.style.marginLeft) + props.imgWidth
          }px`;
          entire.value.style.transform = `translateX(${
            -parseInt(entire.value.style.marginLeft) - props.imgWidth
          }px)`;
        }
        entire.value?.prepend(imgs.value[imgs.value.length - 1]);
        imgs.value.unshift(imgs.value[imgs.value.length - 1]);
        imgs.value.pop();
      }
    };
    onMounted(() => {
      if (entire.value instanceof HTMLElement) {
        entire.value.style.marginLeft = `-${props.imgWidth}px`;
        entire.value?.prepend(imgs.value[imgs.value.length - 1]);
        imgs.value.unshift(imgs.value[imgs.value.length - 1]);
        imgs.value.pop();
      }
    });
    return {
      pictures,
      imgWidths,
      imgs,
      imgsPush,
      entire,
      prev,
      next,
      controlSlide,
    };
  },
});
</script>

<style lang="scss">
.picture {
  overflow: hidden;
  img {
    width: 100%;
  }
}
.scene {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  .arrow {
    font-size: 24px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
}
.entire {
  width: 300%;
  height: 150px;
  transition: margin 0.5s ease;
  li {
    width: 640px;
    height: 100%;
    float: left;
    font-size: 50px;
  }
}
</style>
