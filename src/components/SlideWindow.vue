<template>
  <div class="scene">
    <ul class="entire">
      <li class="picture" v-for="(e, i) in pictures" :key="i" :ref="imgsPush"></li>
    </ul>
    <div class="arrow left" @click="prev">&lt;</div>
    <div class="arrow right" @click="next">&gt;</div>
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
    const prev = () => {};
    return { pictures, imgs, imgsPush };
  },
});
</script>

<style lang="scss">
.picture {
  transition: tra;
}
li {
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
