<template>
  <button class="carousel-control left" @click="$emit('prev')">Prev</button>
  <button class="carousel-control right" @click="$emit('next')">Next</button>
</template>
<script lang="ts">
import { defineComponent, toRef, ref, onMounted } from 'vue';
export default defineComponent({
  emits: ['next', 'prev'],
});
</script>

<style lang="scss" scoped>
.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-block;
  position: absolute;
  top: calc(50% - 25px);
  height: 50px;
  width: 70px;
  color: #f3f3fe;
  cursor: pointer;
}
.left {
  left: 0;
}

.right {
  right: 0;
}
</style>
