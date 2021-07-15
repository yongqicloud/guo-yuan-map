<template>
  <div id="page-3">
    <div class="title">
      四大类核心地图服务能力
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        active-text-color="#1685e1"
        @select="handleSelect"
      >
        <el-menu-item index="1">地图数据</el-menu-item>
        <div class="circle"></div>
        <el-menu-item index="2">数据可视化</el-menu-item>
        <div class="circle"></div>
        <el-menu-item index="3">查询能力</el-menu-item>
        <div class="circle"></div>
        <el-menu-item index="4">空间分析</el-menu-item>
      </el-menu>
    </div>
    <div class="content"
      v-for="(item) in list"
      :key="item.title"
      v-show="String(item.index) === activeIndex"
    >
      <div class="img-container">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="text-container" :class="{'set-order': item.order}">
        <div class="title">
          {{item.title}}
        </div>
        <div class="desc-item" v-for="desc in item.children" :key="desc">
          <div class="icon"></div>
          <div class="desc-content">{{desc}}</div>
        </div>
        <div class="btn">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>

import bg1 from '@/assets/images/bg1.png';
import bg2 from '@/assets/images/bg2.png';
import bg3 from '@/assets/images/bg3.png';
import bg4 from '@/assets/images/bg4.png';
import bg31 from '@/assets/images/bg3-1.png';
import bg32 from '@/assets/images/bg3-2.png';
import bg33 from '@/assets/images/bg3-3.png';
import bg34 from '@/assets/images/bg3-4.png';
import bg41 from '@/assets/images/bg4-1.png';
import bg42 from '@/assets/images/bg4-2.png';

export default {
  data() {
    return {
      activeIndex: '1',
      bg1,
      list: [
        {
          imgUrl: bg1,
          index: 1,
          order: false,
          title: '农业基础底图',
          children: [
            '提供遥感影像、行政区划、耕地地块、经营主体、种植结构、作物长势、产量预测、灾害监测、农业气象、土壤土肥等基础地图数据服务。',
            '满足各相关行业基础空间底图需求',
          ],
        },
        // 第二页
        {
          imgUrl: bg2,
          index: 2,
          order: false,
          title: '地图辅助工具',
          children: [
            '提供定位、量测、标注、动态采集等地图辅助功能',
            '支持App、web、小程序、公众号等多终端集成',
            '辅助用户快速实现空间数据动态采集',
          ],
        },
        {
          imgUrl: bg3,
          index: 2,
          order: true,
          title: '在线定制地图',
          children: [
            '提供各类基础地图数据在线定制、轻松实现地图数据可视化',
            '自定义个性地图样式，打造专属空间地图',
          ],
        },
        {
          imgUrl: bg4,
          index: 2,
          order: false,
          title: '业务数据上图',
          children: [
            '支持用户空间业务数据快速服务化',
            '支持业务数据与基础地块数据集成并自定义地图展示',
            '满足业务数据上图、各类数据叠加展示',
          ],
        },
        // 第 3 页
        {
          imgUrl: bg31,
          index: 3,
          order: false,
          title: '土壤土肥服务',
          children: [
            '提供氮磷钾、有机质、酸碱度、土壤分类等要素查询服务',
            '支持区域级、地块级维度的土壤要素信息查询',
          ],
        },
        {
          imgUrl: bg32,
          index: 3,
          order: true,
          title: '农业气象服务',
          children: [
            '提供气象实况、气象预报、气象预警、气象风险区划等气象数据查询服务',
            '为各类农业活动提供气象参考',
          ],
        },
        {
          imgUrl: bg33,
          index: 3,
          order: false,
          title: '区域级查询服务',
          children: [
            '提供行政区级的地块信息、经营主体信息、土壤肥力、气象灾害、种植信息等统计数据查询服务',
            '为宏观决策提供数据支撑',
          ],
        },
        {
          imgUrl: bg34,
          index: 3,
          order: true,
          title: '地块级查询服务',
          children: [
            '提供地块级的地块信息、经营主体信息、土壤肥力、气象灾害、种植信息等数据查询服务',
            '为宏观决策提供数据支撑',
          ],
        },
        // 第 4 个
        {
          imgUrl: bg41,
          index: 4,
          order: false,
          title: '地块级空间分析',
          children: [
            '提供地块级矢量与栅格数据物理分叠加析、矢量与矢量数据叠加分析服务',
          ],
        },
        {
          imgUrl: bg42,
          index: 4,
          order: true,
          title: '数据对比分析',
          children: [
            '提供区域级、农户级各主题数据比对分析',
            '辅助数据合适校验',
          ],
        },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
    },
  },
};
</script>

<style scoped lang="less">
#page-3{
  // min-height: 100vh;
  width: calc(100vw - 20%);
  margin: 0 auto;
  &>.title{
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .nav{
    width: 1000px;
    margin: 0 auto;
  }
  .circle{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #cccccc;
  }
  .el-menu{
    display: flex;
    align-items: center;
    justify-content: space-around;
    .el-menu-item{
      font-size: 20px;

    }
  }
  .content{
    display: flex;
    min-height: 500px;
    width: 100%;
    margin: 40px auto 0;
    .img-container{
      flex: 6;
      padding: 50px 80px;
      img {
        width: 100%;
      }
    }
    .text-container{
      flex: 4;
      padding: 50px 40px 50px 30px;
      .title{
        font-size: 32px;
        margin-bottom: 20px;
      }
      .desc-item{
        display: flex;
        width: 100%;
        margin-bottom: 20px;
        .icon{
          width: 40px;
          height: 100%;
        }
        .icon::after{
          content: "";
          display: flex;
          width: 12px;
          height: 12px;
          margin-top: 7px;
          background-color: #498ae3;
        }
        .desc-content{
          flex: 1;
          font-size: 16px;
          line-height: 30px;
          vertical-align: super;
          // margin-top: -5px;
          padding-right: 40px;
        }
      }
      .btn{
        width: 160px;
        height: 44px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        // align-self: flex-end
        margin-top: 50px;
        background-color: #498ae3;
      }
    }
    .set-order{
      order: -1;
    }
  }
}
</style>
