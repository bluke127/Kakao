<template>
  <div>
    <ul class="list">
      <li v-for="(e, i) in buy" :key="i" class="list_inner">
        <p class="buy_img"><img :src="e.img" /></p>
        <div class="buy_content">
          <span class="lock"></span>
          <p class="buy_title">{{ e.title }}</p>
          <p class="buy_price">{{ e.price }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    buy: { type: Array },
  },
});
</script>

<style lang="scss">
.list {
  padding: 10px 0;
  .list_inner {
    border: 1px solid #dedfe0;
    border-bottom: none;
    border-radius: 10px;
    display: flex;
    padding: 4px 0 4px 7px;
    .buy_img {
      width: 80px;
      img {
        width: 70px;
      }
    }
    &:last-child {
      border-bottom: 1px solid #dedfe0;
    }
  }
  .buy_content {
    flex: 1;
    position: relative;
    .lock {
      width: 24px;
      height: 24px;
      background: url('~@/assets/icon/gather.png') 0 0 no-repeat;
      background-position: $buy;
      background-size: 700px 600px;
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    p {
      height: 50%;
      display: flex;
      &.buy_title {
        overflow: hidden;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #747475;
        max-height: 38px;
        text-overflow: ellipsis;
        white-space: nowrap;
        align-items: flex-end;
      }
      &.buy_price {
        font-size: 16px;
        vertical-align: top;
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
        align-items: flex-start;
      }
    }
  }
}
</style>
