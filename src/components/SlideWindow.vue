<template>
  <div class="scene" :style="{ width: `${imgWidth}px` }">
    <ul class="entire" ref="entire" :style="{ width: `calc(${pictures.length}*100%)` }">
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
    <div class="bar_wrap">
      <ul class="bar_inner">
        <li
          v-for="(item, index) in pictures"
          :key="index"
          :class="{ active: windowIndex === index }"
        ></li>
      </ul>
    </div>
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
    const windowIndex = ref<number>(0);
    const imgs = ref<HTMLElement[]>([]);
    const controlSlide = ref<number>(0);

    const imgsPush = (el: HTMLElement) => {
      imgs.value.push(el);
    };
    const entire = ref<HTMLElement | null>(null);
    const next = () => {
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
      nextIndex();
    };
    const nextIndex = () => {
      windowIndex.value++;
      if (pictures.value) {
        windowIndex.value < 0
          ? (windowIndex.value =
              (windowIndex.value % pictures?.value.length) + pictures?.value.length)
          : (windowIndex.value = windowIndex.value % pictures?.value.length);
      }
    };
    const prevIndex = () => {
      windowIndex.value--;
      if (props.picture) {
        windowIndex.value < 0
          ? (windowIndex.value = (windowIndex.value % props.picture.length) + props.picture.length)
          : (windowIndex.value = windowIndex.value % props.picture.length);
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
        prevIndex();
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
      prevIndex,
      nextIndex,
      entire,
      prev,
      next,
      controlSlide,
      windowIndex,
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
  margin: 16px auto;
  .arrow {
    font-size: 24px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    cursor: pointer;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
  .bar_wrap {
    display: flex;
    justify-content: center;
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
}
.entire {
  transition: margin 0.5s ease;
  &:after {
    display: block;
    clear: both;
    content: '';
  }
  li {
    width: 640px;
    height: 100%;
    float: left;
    font-size: 50px;
  }
}
</style>
