<template>
  <div>
    <slot name="side_show"></slot>
    <side-menu v-if="store.state.menu.ShowSideMenuFlag"></side-menu>
  </div>
</template>

<script lang="ts">
import SideMenu from './SideMenu.vue';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  components: { SideMenu },
  setup() {
    const store = useStore();
    return { store };
  },
});
</script>

<style lang="scss"></style>
