<template>
  <div class="self-swiper">
    <el-carousel autoplay width="100%" height="calc(100vh - 48px)">
      <el-carousel-item v-for="item in swiperList" :key="item">
        <div class="img-wrapper">
          <img :src="item" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

import swiper1 from '@/assets/images/swiper1.png';
import swiper2 from '@/assets/images/swiper2.png';
import swiper3 from '@/assets/images/swiper3.png';
import swiper4 from '@/assets/images/swiper4.png';

export default {
  name: 'Swiper',
  data() {
    return {
      swiper1,
      swiper2,
      swiper3,
      swiper4,
      swiperList: [swiper1, swiper2, swiper3, swiper4],
    };
  },
};
</script>

<style scoped lang="less">
.self-swiper {
  width: 100%;
  height: calc(100vh - 48px);
  background-color: aquamarine;
  .img-wrapper {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
