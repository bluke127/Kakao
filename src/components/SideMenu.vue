<template>
  <div class="side_menu_wrap" @click.self="test = true">
    <transition name="side-fade">
      <div class="side_menu" v-if="test === false">
        <div>
          <div><span>로그인이</span> 필요해요!</div>
          <div>비회원 주문조회</div>
        </div>
        <ul>
          <li class="list">장바구니 내역</li>
          <li class="list">주문 배송 내역</li>
          <li class="charac">캐릭터</li>
          <li class="charac">카테고리</li>
          <li class="notice">공지사항</li>
          <li class="notice">고객센터</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const test = ref<boolean>(false);
    return { store, test };
  },
});
</script>
<style lang="scss">
.side_menu_wrap {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  .side-fade-enter-active {
    transition: all 0.3s ease 1s;
  }
  .side-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .side-fade-enter, .side-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .side_menu {
    width: 400px;
    height: 100%;
    background-color: #fff;

    .list,
    .charac,
    .notice {
      ::last-child {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
