<template>
  <div class="main_wrap">
    <MainHeader></MainHeader>
    <main><slot></slot></main>
    <MainFooter></MainFooter>
  </div>
</template>

<script lang="ts">
import MainHeader from '@/layout/Header.vue';
import MainFooter from '@/layout/Footer.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { MainHeader, MainFooter },
});
</script>

<style lang="scss">
.main_wrap {
  width: 640px;
  margin: 0 auto;
}
</style>
