<template>
  <div>
    <slot name="side_show"></slot>
    <side-menu v-if="showSideMenuFlag"></side-menu>
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { SideMenu },
  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
