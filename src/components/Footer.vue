<template>
  <div id="footer">
    <div class="body">
      <div class="left">
        <div class="logo-container">
          <img :src="logo" alt="">
          <span class="logo-text">国源地图</span>
        </div>

        <div class="msg-item">
          <span class="lebel">传真</span>
          <span class="icon">:</span>
          <span class="content">010-58301679</span>
        </div>
        <div class="msg-item">
          <span class="lebel">邮箱</span>
          <span class="icon">:</span>
          <span class="content">gytx@gykj.com.cn</span>
        </div>
        <div class="msg-item">
          <span class="lebel">电话</span>
          <span class="icon">:</span>
          <span class="content">010-58301679/010-58301677</span>
        </div>
        <div class="msg-item">
          <span class="lebel">地址</span>
          <span class="icon">:</span>
          <span class="content">北京市西城区西直门外大街1号院西环广场12座C11、C12</span>
        </div>
      </div>
      <div class="middle">
        <div class="lianjie">
          <span>友情链接</span>
          <span style="margin: 0 20px 0 5px">:</span>
          <span>国源地图开放平台</span>
        </div>
        <div class="lianjie">
          <span style="visibility: hidden;">友情链接</span>
          <span style="visibility: hidden; margin: 0 20px 0 5px;">:</span>
          <span>国源科技公司官网</span>
        </div>
      </div>
      <div class="right">
        <div class="qrcode-container">
          <img :src="qrcode1" alt="">
          <div class="desc">国源地图APP</div>
        </div>
        <div class="qrcode-container">
          <img :src="qrcode2" alt="">
          <div class="desc">国源公众号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/logo.png';
import qrcode1 from '@/assets/images/qrcode1.png';
import qrcode2 from '@/assets/images/qrcode2.png';

export default {
  data() {
    return {
      logo,
      qrcode1,
      qrcode2,
    };
  },
};
</script>

<style scoped lang="less">
#footer{
  position: relative;
  display: flex;
  width: 100vw;
  background-color: #22273f;
  min-height: 300px;
  color: #fff;
  padding: 30px 100px;
  .body{
    display: flex;
    width: calc(100vw - 20%);
    margin: 0 auto;
    .left{
      flex: 7;
      .logo-container{
        width: 300px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        img{
          width: 36px;
          height: 36px;
        }
        .logo-text{
          font-size: 20px;
          margin-left: 20px;
        }
      }
      .msg-item{
        font-size: 20px;
        color: #52596f;
        height: 44px;
        line-height: 44px;
        .icon{
          margin: 0 5px;
        }
      }
    }
    .middle{
      position: absolute;
      left: 40%;
      top: 30px;

      .lianjie{
        height: 48px;
        line-height: 48px;
        font-size: 20px;

      }
    }
    .right {
      display: flex;
      justify-content: space-around;
      flex: 3;
      .qrcode-container{
        width: 30%;
        img{
          width: 100%;
        }
        .desc{
          color: #ababb0;
          font-size: 22px;
          text-align: center;
          margin-top: 20px;
        }
      }
    }
  }

}
</style>
