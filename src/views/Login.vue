<template>
  <div class="login_wrap">
    <div class="login">
      <h1></h1>
      <BaseInput :placeholder="'카카오메일 아이디, 이메일, 전화번호'"></BaseInput>
      <BaseInput :placeholder="'비밀번호'" @click="a"></BaseInput>
      <div>
        <BaseButton :style="buttonStyle" @click="autoCheck"></BaseButton
        ><span>로그인 상태 유지</span>
      </div>
      <BaseButton :style="loginButtonStyle"><template v-slot:msg>로그인</template></BaseButton>
      <BaseButton :style="QRButtonStyle"><template v-slot:msg>QR인증</template></BaseButton>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script lang="ts">
import MainFooter from '@/components/Footer.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import { defineComponent, reactive, ref } from 'vue';
type buttonStyleType = {
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundColor?: string;
  textAlign?: string;
  fontSize?: string;
  width: string;
  height: string;
};
export type { buttonStyleType };
export default defineComponent({
  components: { MainFooter, BaseInput, BaseButton },
  setup() {
    /* eslint @typescript-eslint/no-var-requires: "off" */
    const buttonBackgroundImg = ref<string>(require('@/assets/logo/logo_gather.png'));
    const buttonStyle = reactive<buttonStyleType>({
      backgroundImage: `url('${buttonBackgroundImg.value}')`,
      backgroundPosition: '-30px -30px',
      width: '20px',
      height: '20px',
    });

    const autoCheck = () => {
      buttonStyle.backgroundPosition === '0 -30px'
        ? (buttonStyle.backgroundPosition = '-30px -30px')
        : (buttonStyle.backgroundPosition = '0 -30px');
    };
    return { buttonStyle, buttonBackgroundImg, autoCheck };
  },
});
</script>

<style lang="scss" scoped>
.login_wrap {
  position: relative;
  .login {
    margin: 40px auto;
    vertical-align: top;
    text-align: left;
    width: 480px;
    padding: 60px 70px;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    h1 {
      display: inline-block;
      width: 88px;
      height: 27px;
      margin: 0 auto;
      line-height: 1;
      vertical-align: top;
      background: url('~@/assets/logo/logo_gather.png');
    }
    ::v-deep input {
      width: 100%;
      height: 48px;
      border-style: solid;
      border-width: 0 0 2px 0;
      border-color: #ebebeb;
      padding: 11px 70px 8px 0;
      color: #252525;
      outline: 0;
      border-radius: 0;
      box-sizing: border-box;
      caret-color: #191919;
      text-decoration: none;
    }
  }
}
</style>
