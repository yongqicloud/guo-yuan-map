<template>
  <div id="page4">
    <div class="title">
      国源地图各行业应用案例
    </div>
    <div class="body">
      <div class="menu" >
        <div
          v-for="(item, index) in 8"
          :key="item"
          class="menu-item"
          :class="{'active': index === activeIndex}"
          @click="handleClick(index)"
         >数字化运营</div>
      </div>
      <div class="content">
        <img :src="img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import img from '@/assets/images/green.png';

export default {
  data() {
    return {
      img,
      activeIndex: 0,
    };
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
#page4{
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
    display: flex;
    .menu{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 2;
      border-left: 5px solid #ccc;
      .menu-item{
        height: 10%;
        display: flex;
        width: 80%;
        background-color: #f0f0f0;
        font-weight: 700;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:last-child{
          margin-bottom: none;
        }

      }
      .active{
        background-color: #1c84e0;
        color: #fff;
      }
    }
    .content{
      flex: 8;
      display: flex;
      justify-content: center;
      img{
        // width: 800px;
        // height: 400px
        width: 100%;
      }
    }
  }
}
</style>
