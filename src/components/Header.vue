<template>
  <div id="header">
    <div class="body">
      <div class="logo-container" :class="{aaaaaa: true}">
        <img :src="logo" alt="">
        <span class="logo-text bgc-fff">国源地图</span>
      </div>
      <div class="nav">
        <span class="bgc-fff">首页</span>
        <span class="bgc-fff">地图教育</span>
        <span class="bgc-fff">核心服务</span>
        <span class="bgc-fff">行业应用</span>
      </div>
      <div class="login-container">
        <span class="login-text">立即登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png';

export default {
  name: 'Header',
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped lang="less">
#header{
  background-color: #272c47;
  .body{
    // width: calc(100vw - 20%);
    margin: 0 auto;
    height: 48px;
    padding: 0 26px;
    display: flex;
    align-items: center;
    .logo-container{
      width: 300px;
      display: flex;
      align-items: center;
      img{
        width: 36px;
        height: 36px;
      }
    }
    .nav{
      flex: 1;
    }
    .bgc-fff{
      color: #fff;
      margin-right: 50px;
    }
    .logo-text {
      margin-left: 10px;
    }
    .login-container{
      width: 100px;
    }
    .login-text{
      color: #51a0ca;
      font-size: 12px;
    }
  }

}
</style>
