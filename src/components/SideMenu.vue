<template>
  <div class="side_menu_wrap" @click.self="closeSideMenu">
    <div class="side_menu" ref="sideMenu">
      <div class="go_login">
        <div class="need_login"><span>로그인이</span> 필요해요!</div>
        <div>비회원 주문조회</div>
      </div>
      <div class="img">
        <img
          src="https://t1.kakaocdn.net/friends/prod/main_tab/banner/main_tab/banner_20220117111515_220117_np_choon.jpg"
        />
      </div>
      <ul class="list_wrap">
        <li class="list">
          <div>장바구니 내역</div>
          <div>주문 배송 내역</div>
        </li>
        <li class="charac" @click="toggleArrow($event)">
          <div class="arrowDown" @click="toggleArrow($event)">캐릭터</div>
          <div class="arrowDown" @click="toggleArrow($event)">카테고리</div>
        </li>
        <li class="notice">
          <div>공지사항</div>
          <div>고객센터</div>
        </li>
        <li class="gift"><div>기프트카드 조회 환불</div></li>
        <li class="store">
          <div>브랜드 스토리</div>
          <div>매장안내</div>
        </li>
      </ul>
      <div class="img last_img">
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
        // sideMenu.value.style.marginLeft = '0';
      }
      setTimeout(() => {
        store.state.menu.ShowSideMenuFlag = false;
      }, 500);
    };
    const toggleArrow = (e: Event) => {
      // (e.target? as Element).removeClassName('arrowDown');
      if (e.target instanceof Element) {
        let toggleBefore: string;
        let toggleAfter: string;
        console.log(e.target.className);
        e.target.className.indexOf('arrowDown') < 0
          ? ((toggleBefore = 'arrowUp'), (toggleAfter = 'arrowDown'))
          : ((toggleBefore = 'arrowDown'), (toggleAfter = 'arrowUp'));
        e.target.classList.replace(toggleBefore, toggleAfter);
      }
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
    padding: 24px 0;
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
    .go_login {
      width: 100%;
      padding: 12px 32px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      .need_login {
        font-size: 20px;
        font-weight: 900;
      }
    }
    .img {
      border-radius: $border-radius-small-img;
      overflow: hidden;
      margin: 0 32px;
      img {
        width: 100%;
      }
    }
    .list,
    .charac,
    .notice {
      ::last-child {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
    .list_wrap {
      li {
        padding: 16px 32px;
        font-size: 16px;
        line-height: 48px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
    .last_img {
      border-radius: $border-radius-small-img;
      height: 90px;
      overflow: hidden;
      margin: 32px;
      margin-bottom: 16px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
