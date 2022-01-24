<template>
  <div>
    <div><SlideWindow :picture="pictures" :imgWidth="640" />ddddd</div>
    <Announce
      v-for="(e, i) in list"
      :key="i"
      :picture="e.img"
      :topImg="e.topImg"
      :name="e.name"
      :imgWidth="500"
    ></Announce>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import SlideWindow from '@/components/SlideWindow.vue';
import Announce from '@/components/Announce.vue';
import { response } from '@/fakeData/todayList';
import type { responseListType } from '@/fakeData/todayList';
export default defineComponent({
  components: { SlideWindow, Announce },
  setup() {
    const pictures = [
      require('@/assets/image/00_chac.png'),
      require('@/assets/image/01_chac.png'),
      require('@/assets/image/02_chac.png'),
    ];
    const list = ref<responseListType | null>(response.list);
    onMounted(() => {
      // console.log(response.list);
      // list.value?.push(...response.list);
      // console.log(list.value);
    });
    return { list, pictures };
  },
});
</script>

<style></style>
