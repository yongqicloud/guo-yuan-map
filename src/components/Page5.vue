<template>
  <div id="page5">
    <div class="title">
      国源地图开放资源
    </div>
    <div class="body">
      <div class="img-container" v-for="img in list" :key="img">
        <img :src="img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import map1 from '@/assets/images/map1.png';
import map2 from '@/assets/images/map2.png';
import map3 from '@/assets/images/map3.png';
import map4 from '@/assets/images/map4.png';

export default {
  data() {
    return {
      map1,
      list: [map1, map2, map3, map4],
    };
  },
};
</script>

<style scoped lang="less">
#page5{
  width: calc(100vw - 20%);
  min-height: 50vh;
  margin: 0 auto;
  &>.title{
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .body{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .img-container{
      width: 45%;
      margin-bottom: 20px;
      img{
        width: 100%;
        height: 360px;
      }
    }
  }
}
</style>
