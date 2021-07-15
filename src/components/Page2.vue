<template>
  <div id="page-2">
    <div class="title">
      丰富的农业基础地理数据产品
    </div>
    <div class="content">
      <div class="item" v-for="item in list" :key="item">
        <div class="img-wrapper">
          <img class="img-item" :src="item.img" alt="">
        </div>
        <div class="text title-text">
          {{item.title}}
        </div>
        <div class="text desc-text">
          {{item.desc}}
        </div>

        <div class="cover">
          <div class="cover-container">
            <img :src="defaultImg" alt="">
          </div>
          <div class="over-text">{{item.title}}</div>
          <div class="overview">预览</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import defaultImg from '@/assets/images/default.png';
import item1 from '@/assets/images/item1.png';
import item2 from '@/assets/images/item2.png';
// import item3 from '@/assets/images/item3.png';
import item4 from '@/assets/images/item4.png';
import item5 from '@/assets/images/item5.png';
import item6 from '@/assets/images/item6.png';
import item7 from '@/assets/images/item7.png';
import item8 from '@/assets/images/item8.png';
import item9 from '@/assets/images/item9.png';
import item10 from '@/assets/images/item10.png';
import item11 from '@/assets/images/item11.png';
import item12 from '@/assets/images/item12.png';

export default {
  data() {
    return {
      defaultImg,
      list: [
        {
          img: item1,
          title: '遥感影像',
          desc: '多源多尺影像数据接入',
        },
        {
          img: item2,
          title: '行政区划',
          desc: '省、市、县、乡、村五级行政区划空间位置数据',
        },
        {
          img: item10,
          title: '耕地地块',
          desc: '多源多尺影像数据接入',
        },
        {
          img: item4,
          title: '经营主体',
          desc: '承包户、新型经营主体、服务组织',
        },
        {
          img: item5,
          title: '种植数据',
          desc: '主要农作物种植空间分布，不同生长期长势监测、产量评估、作物灾害等遥感监测数据',
        },
        {
          img: item6,
          title: '养殖数据',
          desc: '主要养殖结构信息',
        },
        {
          img: item7,
          title: '土壤土肥',
          desc: '土壤类别、有机质、氮磷钾含量、土肥样点等数据',
        },
        {
          img: item8,
          title: '气象数据',
          desc: '气象实况、气象预报、气象预警、气象风险区划等气象要素数据',
        },
        {
          img: item9,
          title: '解译样本',
          desc: '分类样本、测产样本、灾害样本、大棚样本等各类遥感解译样本',
        },
        {
          img: item10,
          title: '地形数据',
          desc: '多尺度DEM数据',
        },
        {
          img: item11,
          title: '地块级统计数据',
          desc: '以地块为单元、以时间为条件统计的各类主体数据',
        },
        {
          img: item12,
          title: '区域级统计数据',
          desc: '以区域为单元、以时间为条件的各类主体数据',
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
#page-2{
  height: max-content;
  width: calc(100vw - 20%);
  margin: 0 auto;
  overflow: hidden;
  .title{
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
  }
  .item{
    width: 24%;
    height: 300px;
    background-color: #f7f9ff;
    padding: 20px;
    margin-bottom: 20px;
    position: relative;
    .img-wrapper{
      display: flex;
      justify-content: center;
      img{
        width: 140px;
        height: 140px;
        margin: o auto;
      }
    }
    .text{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .title-text{
      height: 44px;
      font-size: 28px;
      align-items: center;
    }
    .desc-text{
      font-size: 16px;
      // padding: 0 15px;
      line-height: 36px;
    }
  }
  .item:hover{
    cursor: pointer;
    .cover{
      display: block;
    }
  }
  .cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #3080e1;
    .cover-container{
      display: flex;
      justify-content: center;
      img {
        width: 120px;
        height: 120px;
      }
    }
    .over-text{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 26px;
      font-weight: 700;
      color: #fff;
      margin: 20px auto;
    }
    .overview{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: #fff;
      margin: 0 auto;
      width: 100px;
      height: 44px;
      border-radius: 22px;
      padding: 0 20px;
      border: 2px solid #fff;
    }
  }
}
</style>
