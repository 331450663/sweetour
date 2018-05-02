<template>
    <div>
        <div class="ind-logo-show"><img src="../../images/public/mobile-logo.png"/></div>
        <div class="ind-search">
             <router-link :to="'searchPage'"><input type="search" placeholder="目的地/关键字/景点" class="ind-sea-inp"/></router-link>
        </div>
        <!-- 轮播 -->
        <section class="swiper-container ind-banenr">
            <div class="swiper-wrapper" id="js-ind-banner">
                 <div class="swiper-slide"></div>
                 <div class="swiper-slide"></div>
                 <div class="swiper-slide"></div>
            </div>
            <div class="swiper-pagination"></div>
        </section> 
        <ul class="ind-mid-nav">
            <li>
                <img src="../../images/home/flexdata-1.png">
                <p>签证</p>
            </li>
            <li>
                <img src="../../images/home/flexdata-2.png">
                <p>签证</p>
            </li>
            <li>
                <img src="../../images/home/flexdata-3.png">
                <p>签证</p>
            </li>
            <li>
                <img src="../../images/home/flexdata-4.png">
                <p>签证</p>
            </li>
            <li>
                <img src="../../images/home/flexdata-5.png">
                <p>签证</p>
            </li>
            <li>
                <img src="../../images/home/flexdata-6.png">
                <p>签证</p>
            </li>
        </ul>
        <page-footer></page-footer>
    </div>
</template>

<script>
  import pageFooter from '../../components/footer/footer'
  export default {
  data () {
    return {

    }
  },
  components:{pageFooter}
}

   

</script>

<style scoped>
        /*logo、搜索*/
        .ind-logo-show{width:2.5rem;height:.73rem;margin:0 auto}
        .ind-logo-show img{width:100%;vertical-align:top}
        .ind-search{margin-top:.21rem;height:.7rem;text-align:center}
        .ind-sea-inp{width:94%;height:100%;border-radius:15rem;border:none;background:#f5f5f5;padding-left:.6rem;font-size:.26rem;vertical-align:top}

        /*导航*/
        .ind-mid-nav{font-size: .3rem;text-align:center}
        .ind-mid-nav li{margin-top: .45rem;float:left;width: 33.33%}
        .ind-mid-nav li img{width:42%}
</style>

