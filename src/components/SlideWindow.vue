<template>
  <div class="scene">
    <ul class="entire">
      <li class="picture" v-for="(e, i) in pictures" :key="i" :ref="imgsPush"></li>
    </ul>
    <div class="arrow left" @click="prev($event)">&lt;</div>
    <div class="arrow right" @click="next($event)">&gt;</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, ref } from 'vue';
export default defineComponent({
  props: {
    picture: { type: Array, default: () => ['1', '2', '3'] },
  },
  setup(props) {
    const pictures = toRef(props, 'picture');
    const imgs = ref<HTMLElement[]>([]);
    const imgsPush = (el: HTMLElement) => {
      imgs.value.push(el);
    };
    const prev = (e: Event) => {
      alert();
      console.log(e.target);
      if (e.target instanceof HTMLElement) {
        console.log(e.target);
        e.target.style.transform = 'translateX(-100%)';
      }
    };
    const next = (e: Event) => {};
    return { pictures, imgs, imgsPush, prev, next };
  },
});
</script>

<style lang="scss">
.picture {
  transition: all 0.5s ease;
}
.scene {
  width: 640px;
}
.entire {
  width: 300%;
  height: 150px;
  // overflow: hidden;
  li {
    width: 640px;
    height: 100%;
    float: left;
  }
  :nth-child(1) {
    background-color: red;
  }
  :nth-child(2) {
    background-color: blue;
  }
  :nth-child(3) {
    background-color: green;
  }
}
</style>
