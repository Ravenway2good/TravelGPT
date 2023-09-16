<template>
  <div class='login-page page-background'>
    <el-form ref='loginForm'
             :rules='loginRules'
             :model='loginForm' class='login-form' auto-complete='on'
             label-position='left'
             label-width='120px'>
      <div class='login-header'>
        TourismGPT
      </div>
      <el-form-item prop='loginId' label='User Number'>
        <el-input v-model.trim='loginForm.loginId'
                  name='loginId'
                  type='text'
                  auto-complete='off'
                  prefix-icon='el-icon-user'
                  clearable
                  placeholder='User Number'
                  class='form-cell-input el-input-icon' />
      </el-form-item>
      <div class='login-btn'>
        <el-button type='primary' class='login-el-btn btn-primary' @click='handleLogin'>开始使用</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import _ from 'lodash';

export default {
  name: 'Login',
  created () {
  },
  components: {
  },
  mounted () {
  },
  data () {
    return {
      verifyResult: {},
      dialogVisible: false,
      initialized: false,
      loginForm: {
        loginId: '',
      },
      showDialog: false,
      redirect: undefined,
      countdown: 0,
      loginRules: {
        loginId: [{required: true, trigger: 'blur', message: 'Please input user number'}],
      },
    };
  },
  computed: {
    disabledGetByEmailBtn () {
      return this.countdown > 0 || _.isEmpty(this.loginForm.loginId);
    },
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          // const result = await formLogin({...this.loginForm});
          // if (!_.isEmpty(result) && result.status !== 200) {
          //   throw new Error(result.message);
          // }
          await this.$router.push({
            name: 'GuidePage',
          });
        }
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.login-page {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.login-header {
  padding-bottom: 50px;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  background: #FFFFFF;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 547px;
  height: 300px;

  .form-cell-input {
    width: 347px;
  }

  .form-cell-input-code {
    width: 224px;
  }

  .login-btn {
    text-align: center;
    .login-el-btn {
      width: 200px;
      border-radius: 3px;
      font-weight: bold;
    }
  }
  .email-btn {
    width: 120px;
    border-radius: 3px;
    padding: 0;
    height: 32px;
    line-height: 32px;
  }

  .login-reset-btn {
    color: rgb(141, 147, 150);
    margin-left: 12px;
    cursor: pointer;
  }

  .login-btn, .login-reset-btn, .email-btn {
    font-style: normal;
    font-size: 12px;
  }
}

.title-container {
  text-align: center;
  font-size: 18px;
  margin-bottom: 7%;
}



.el-row {
  margin-top: 15vh !important;
}

.inactive-button {
  color: #fff !important;
  background-color: rgb(189, 197, 202) !important;
}

/* start hcaptcha hack */
.am-captcha-wrapper {
  transform:scale(0.75);
  -webkit-transform:scale(0.75);
  transform-origin:0 0;
  -webkit-transform-origin:0 0;
}
/* scale hcaptcha's backdrop to fill the screen */
.am-captcha-wrapper > div:nth-child(2) {
  left: -300%!important;
  top: -300%!important;
  width: 600%!important;
  height: 600%!important;
}
/* end hcaptcha hack */
</style>
