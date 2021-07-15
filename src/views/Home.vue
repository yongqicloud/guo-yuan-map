<template>
  <div class="home">
    <Header></Header>
    <Swiper></Swiper>
    <Page2></Page2>
    <Page3></Page3>
    <Page4></Page4>
    <Page5></Page5>
    <Sponsor></Sponsor>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Swiper from '@/components/Swiper.vue';
import Page2 from '@/components/Page2.vue';
import Page3 from '@/components/Page3.vue';
import Page4 from '@/components/Page4.vue';
import Page5 from '@/components/Page5.vue';
import Sponsor from '@/components/Sponsor.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Swiper,
    Page2,
    Page3,
    Page4,
    Page5,
    Sponsor,
    Footer,
  },
};
</script>

<style scoped lang="less">

</style>
