<template>
  <div class="login_wrap">
    <div class="login">
      <h1></h1>
      <BaseInput
        :placeholder="'카카오메일 아이디, 이메일, 전화번호'"
        v-model="idValue"
        @click.self="idLabelClick"
        @input="idLabelClick"
        @blur="idLabelBlur"
        ><template v-slot:label v-if="idValue">
          <label class="label" @click="labelClick('id')">
            <span class="id_label" :class="!setIdValueBtn ? 'close' : ''"
              ><span v-if="setIdValueBtn">@kakao.com</span></span
            >
          </label>
        </template>
      </BaseInput>
      <BaseInput
        v-model="passwordValue"
        :placeholder="'비밀번호'"
        type="password"
        @blur="passwordLabelBlur"
        ><template v-slot:label v-if="passwordValue">
          <label class="label" @click="labelClick('password')">
            <span class="id_label" :class="!setPasswordValueBtn ? 'close' : ''"></span>
          </label> </template
      ></BaseInput>
      <div class="auto_check_wrap">
        <BaseButton :style="buttonStyle" @click="autoCheck"></BaseButton
        ><span class="auto_check_text">로그인 상태 유지</span>
      </div>
      <div class="btn_wrap">
        <BaseButton :style="loginButtonStyle" @click="login"
          ><template v-slot:msg>로그인</template></BaseButton
        >
        <span class="line"><span class="line_in">또는</span></span>
        <BaseButton :style="QRButtonStyle"><template v-slot:msg>QR인증</template></BaseButton>
      </div>
    </div>
    <MainFooter></MainFooter>
  </div>
</template>

<script lang="ts">
import MainFooter from '@/components/Footer.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import { defineComponent, reactive, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';
type buttonStyleType = {
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundColor?: string;
  color?: string;
  textAlign?: string;
  fontSize?: string;
  lineHeight?: string;
  className?: string;
  borderRadius?: string;
  width: string;
  height: string;
};
export type { buttonStyleType };
export default defineComponent({
  components: { MainFooter, BaseInput, BaseButton },
  setup() {
    const store = useStore();
    /* eslint @typescript-eslint/no-var-requires: "off" */
    const buttonBackgroundImg = ref<string>(require('@/assets/logo/logo_gather.png'));
    const buttonStyle = reactive<buttonStyleType>({
      backgroundImage: `url('${buttonBackgroundImg.value}')`,
      backgroundPosition: '-30px -30px',
      width: '20px',
      height: '20px',
    });
    const loginButtonStyle = reactive<buttonStyleType>({
      backgroundColor: '#fee500',
      lineHeight: '50px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#000',
      borderRadius: '4px',
      width: '100%',
      height: '50px',
    });
    const QRButtonStyle = reactive<buttonStyleType>({
      backgroundColor: '#f6f6f6',
      lineHeight: '50px',
      textAlign: 'center',
      fontSize: '14px',
      borderRadius: '4px',
      color: '#000',
      width: '100%',
      height: '50px',
      className: 'hover',
    });
    const login = () => {
      console.log(store.state.user);
      if (!idValue.value || !passwordValue.value) {
        return;
      }
      store.dispatch('user/SET_EMAIL', `${idValue.value}@kakao.com`);
      router.push({ path: '/' });
    };
    const setIdLabelFlag = ref<null | string>(null);
    const passwordValue = ref<null | string>(null);
    const idValue = ref<null | string>(null);
    const setIdValueBtn = ref<boolean>(false);
    const setPasswordValueBtn = ref<boolean>(false);
    const idDelete = ref<boolean>(false);
    const idLabelClick = () => {
      if (idValue.value) {
        setIdValueBtn.value = false;
      }
    };
    const idLabelBlur = () => {
      if (idValue.value) {
        setIdValueBtn.value = true;
      }
    };
    const passwordLabelBlur = () => {
      if (passwordValue.value) {
        setPasswordValueBtn.value = true;
      }
    };
    const labelClick = (category: string) => {
      if (category === 'id') {
        if (idValue.value && setIdValueBtn.value) {
          setIdValueBtn.value = false;
          idValue.value = null;
        }
      } else {
        if (passwordValue.value && setPasswordValueBtn.value) {
          setPasswordValueBtn.value = false;
          passwordValue.value = null;
        }
      }
    };

    const autoCheck = () => {
      if (buttonStyle.backgroundPosition === '0 -30px') {
        store.dispatch('user/SET_AUTO_LOGIN', false);
        buttonStyle.backgroundPosition = '-30px -30px';
      } else {
        store.dispatch('user/SET_AUTO_LOGIN', true);
        buttonStyle.backgroundPosition = '0 -30px';
      }
    };
    onMounted(() => {
      if (store.state.user.email) {
        idValue.value = store.state.user.email.replace('@kakao.com', '');
        if (store.state.user.autoLogin) {
          router.push({ path: '/' });
        }
      }
    });
    return {
      store,
      buttonStyle,
      buttonBackgroundImg,
      autoCheck,
      passwordValue,
      login,
      loginButtonStyle,
      QRButtonStyle,
      setIdLabelFlag,
      idValue,
      idLabelClick,
      setPasswordValueBtn,
      passwordLabelBlur,
      idLabelBlur,
      idDelete,
      setIdValueBtn,
      labelClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.login_wrap {
  position: relative;
  overflow: hidden;
  .login {
    margin: 40px auto;
    vertical-align: top;
    text-align: left;
    width: 480px;
    padding: 60px 70px;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    .auto_check_wrap {
      margin-top: 25px;
      font-size: 14px;
      line-height: 20px;
      .auto_check_text {
        margin-left: 8px;
        vertical-align: middle;
      }
    }
    h1 {
      display: inline-block;
      width: 88px;
      height: 27px;
      margin: 0 auto;
      line-height: 1;
      vertical-align: top;
      background: url('~@/assets/logo/logo_gather.png');
      margin: 0 0 30px 0;
    }
    .btn_wrap {
      margin-top: 40px;
      .line {
        position: relative;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 0;
        line-height: 0;
        text-align: center;
        &:before,
        &:after {
          display: inline-block;
          width: calc(50% - 20px);
          height: 1px;
          margin: 8px 0;
          background-color: rgba(0, 0, 0, 0.06);
          vertical-align: top;
          content: '';
        }
        .line_in {
          display: inline-block;
          width: 40px;
          font-size: 12px;
          line-height: 18px;
          color: rgba(0, 0, 0, 0.3);
        }
      }
    }
    .label {
      min-width: 20px;
      min-height: 20px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
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
    .id_label {
      &.close {
        width: 20px;
        height: 20px;
        display: block;
        background: url('~@/assets/logo/logo_gather.png');
        background-position: $close;
        cursor: pointer;
      }
    }
    ::v-deep .base_input input {
      &:focus {
        border-bottom: 2px solid #000;
      }
    }
    ::v-deep .hover {
      &:hover {
        background-color: #e7e7e7 !important;
      }
    }
  }
}
</style>
