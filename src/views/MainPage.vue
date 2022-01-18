<template>
  <Main><router-view></router-view></Main>
</template>

<script lang="ts">
import Main from '@/layout/Main.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Main },
});
</script>
<style></style>
