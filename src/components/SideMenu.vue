<template>
  <div class="side_menu_wrap" @click.self="closeSideMenu">
    <div class="side_menu" ref="sideMenu">
      <div>
        <div><span>로그인이</span> 필요해요!</div>
        <div>비회원 주문조회</div>
      </div>
      <div class="img">
        <img
          src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/main_tab/banner_20220117111515_220117_np_choon.jpg"
        />
      </div>
      <ul>
        <li class="list">장바구니 내역</li>
        <li class="list">주문 배송 내역</li>
        <li class="charac arrowDown" @click="toggleArrow($event)">캐릭터</li>
        <li class="charac arrowDown">카테고리</li>
        <li class="notice">공지사항</li>
        <li class="notice">고객센터</li>
      </ul>
      <div class="img">
        <img
          src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/main_tab/banner_20220117111515_220117_np_choon.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  setup() {
    const store = useStore();
    const sideMenu = ref<HTMLElement | null>(null);
    const sideMenuFlag = computed(() => {
      return store.state.menu.ShowSideMenuFlag;
    });
    const closeSideMenu = () => {
      if (sideMenu.value) {
        sideMenu.value.style.marginLeft = '-400px';
      }
      setTimeout(() => {
        store.state.menu.ShowSideMenuFlag = false;
      }, 500);
    };
    const toggleArrow = (e: Event) => {
      (e.target? as Element).removeClassName('arrowDown');
      (e.target? as Element).addClassName('arrowUp');
    };
    return { store, sideMenuFlag, sideMenu, closeSideMenu, toggleArrow };
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
  .side_menu {
    width: 400px;
    height: 100%;
    background-color: #fff;
    animation: slidein 0.5s;
    transition: all 0.5s ease;
    @keyframes slidein {
      from {
        margin-left: -400px;
      }
      to {
        margin-left: 0;
      }
    }
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
