<template>
  <div>
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

<style></style>
