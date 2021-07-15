<template>
  <div id="sonsor">
    <div class="title">
      与合作伙伴共建国源地图生态
    </div>
    <div class="header">技术合作</div>
    <div class="ad-contaier">
      <img :src="ad1" alt="">
    </div>
    <div class="header">代表客户</div>
    <div class="ad-contaier">
      <img :src="add2" alt="">
    </div>
  </div>
</template>

<script>
import ad1 from '@/assets/images/ad1.png';
import add2 from '@/assets/images/add2.png';

export default {
  data() {
    return {
      ad1,
      add2,
    };
  },
};
</script>

<style scoped lang="less">
#sonsor{
  width: calc(100vw - 20%);
  min-height: 50vh;
  margin: 0 auto 20px;
  &>.title{
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .header{
    height: 50px;
    font-size: 28px;
  }
  .ad-contaier{
    display: flex;
    justify-content: center;
    img{
      max-width: 100%;
    }
  }
}
</style>
