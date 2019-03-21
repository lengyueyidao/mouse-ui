<template>
  <div class="page">
    <h2>Home Page</h2>
    <a-button @click="getUserInfo()">获取用户信息</a-button>
    <a-button @click="getMenuInfo()">获取菜单信息</a-button>
  </div>
</template>

<script>

  import mock from '@/mock/index.js'

  export default {
    name: 'Home',
    methods: {
      getUserInfo() {
        this.$api.user.getUserInfo().then(function(res) {
          alert(JSON.stringify(res.data));
        }).catch(function(res) {
          alert(res);
        })
      },
      getMenuInfo() {
        this.$api.menu.getMenuInfo().then(function(res) {
          alert(JSON.stringify(res.data));
        }).catch(function(res) {
          alert(res);
        })
      }
    }
  }
</script>