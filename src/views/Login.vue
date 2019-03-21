<template>
  <div class="page">
    <div class="lanaguage">
      <a-dropdown>
        <a-menu slot="overlay" @click="changeLanguage">
          <a-menu-item key="zh">简体中文</a-menu-item>
          <a-menu-item key="en">English</a-menu-item>
        </a-menu>
        <a-button style="margin-left: 8px">
        <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
    <a-form
      id="loginForm"
      :form="form"
      class="login-form"
      @submit="login"
    >
      <h1 class="login-form-title">{{$t('common.loginTitle')}}</h1>
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: userNameEmptyHint }] }
          ]"
          :placeholder="userName"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: passwordEmptyHint }] }
          ]"
          type="password"
          :placeholder="password"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0,0,0,.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          class="login-form-remember"
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            }
          ]"
        >
          {{$t('common.rememberMe')}}
        </a-checkbox>
        <a
          class="login-form-forgot"
          href=""
        >
          {{$t('common.forgotPassword')}}
        </a>
      </a-form-item>
      <a-form-item>
        <div style="margin-top: -25px">
          <a-button 
            type="primary" 
            @click="reset()"
            class="login-form-button reset-button"
          >
            {{$t('common.reset')}}
          </a-button>
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button login-button"
          >
            {{$t('common.login')}}
          </a-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  
  import mock from '@/mock/index.js'
  import Cookies from 'js-cookie'
  import router from '@/router'
  
  export default {
    inject: ['reload'],
    data() {
      return {
        form: this.$form.createForm(this)
      }
    },
    mounted() {
      
    },
    computed: {
      userName() {
        return this.$t('common.userName')
      }, 
      userNameEmptyHint() {
        return this.$t('common.userNameEmptyHint')
      },
      password() {
        return this.$t('common.password')
      },
      passwordEmptyHint() {
        return this.$t('common.passwordEmptyHint')
      }
    },
    methods: {
      login(e) {
        console.log(this.form.getFieldDecorator);
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            this.$api.login.login().then((res) => {
              if(values.remember) {
                this.setCookie(values.userName, values.password, 1);
              } else {
                this.clearCookie();
              }
              Cookies.set('token', res.data.token);
              router.push('/'); // 登录成功，跳转至主页
            }).catch((res) => {
              alert(res);
            })
          }
        });
        /*  */
      },
      reset() {
        this.form.resetFields();
      },
      //设置cookie
      set(userName, password, exdays) {
          Cookies.set("userName", userName, {expires: exdays});
          Cookies.set("password", password, {expires: exdays});
      },
      //获取cookie
      getCookie() {
          let userName = Cookies.get("userName");
          let password = Cookies.get("password");
          console.info(userName + "-" + password);
      },
      //删除cookie
      clearCookie() {
          this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
      },
      changeLanguage(obj) {
        console.log(obj.key);
        this.$i18n.locale = obj.key;
        this.reload();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    width: 100%;
    height: 100%;
  }
  .lanaguage {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .login-form {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 0 auto;
    width: 450px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    position: relative;
    top: 50%;
    margin-top: -175px;
    .login-form-title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .login-form-remember {
      float: left;
    }
    .login-form-forgot {
      float: right;
    }
    .login-form-button {
      width: 48%;
    }
    .reset-button {
      float: left;
    }
    .login-button {
      float: right;
    }
    
  }
</style>
