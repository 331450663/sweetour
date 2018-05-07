<template>
    <div>
    <header class="header-sub">
            <h1>{{this.$route.query.key}}</h1>
    </header>
    <ul class="search-navtab">
        <li v-if="item.count>0" v-for="(item,index) in navtab" :class="{current:num == index}"  @click="navtabClick(index)">{{item.name}}</li>
        <!-- <li :class="{current:num == $index}" @click="navtabClick($index)">全部</li>
        <li :class="{current:num == index}" v-if="FreeCount>0" @click="navtabClick($index)">机票+酒店</li>
        <li :class="{current:num == index}" v-if="GroupCount>0" @click="navtabClick($index)">跟团游</li>
        <li :class="{current:num == index}" v-if="SideCount>0" @click="navtabClick($index)">周边游</li>
        <li :class="{current:num == index}" v-if="VisaCount>0" @click="navtabClick($index)">签证</li>
        <li :class="{current:num == index}" v-if="SingeCount>0" @click="navtabClick($index)">城市玩乐</li>-->
    </ul>
    <div class="swiper-container" id="content">
    <div class="swiper-wrapper">
    <!--全部分类-->
    <div class="swiper-slide search-content">
    <!--自由行-->
    <div class="category-content" v-if="FreeCount>0">
       <h2 class="category">机票+酒店</h2>
       <ul class="search-pro">
         <li v-for="(item,index) in ProductList.FreeList.slice(0, 3)">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">机票+酒店</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
       </ul>
       <div class="search-more" onclick="type(1)" v-if="FreeCount>4">查看更多</div>
    </div>
    <!--跟团-->
    <div class="category-content" v-if="GroupCount>0">
       <h2 class="category">跟团游</h2>
         <ul class="search-pro">
         <li v-for="(item,index) in ProductList.GroupList.slice(0, 3)">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">跟团游</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
       </ul>
       <div class="search-more" onclick="type(2)" v-if="GroupCount>4">查看更多</div>
    </div>
    <!--周边游-->
    <div class="category-content" v-if="SideCount>0">
       <h2 class="category">周边游</h2>
       <ul class="search-pro">
         <li v-for="(item,index) in ProductList.SideList.slice(0, 3)">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">周边游</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
       </ul>
       <div class="search-more" onclick="type(3)" v-if="SideCount>4">查看更多</div>
    </div>
    <!--签证-->
    <div class="category-content" v-if="VisaCount>0">
       <h2 class="category">签证</h2>
       <ul class="search-pro">
         <li v-for="(item,index) in ProductList.VisaList.slice(0, 3)">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">签证</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
       </ul>
       <div class="search-more" onclick="type(4)" v-if="VisaCount>4">查看更多</div>
    </div>
    <!--城市玩乐-->
    <div class="category-content" v-if="SingeCount>0">
       <h2 class="category">城市玩乐</h2>
       <ul class="search-pro">
         <li v-for="(item,index) in ProductList.SingeList.slice(0, 3)">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">城市玩乐</em>
                <em class="mark-key">{{item.Destination}}</em>
                </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
       </ul>
       <div class="search-more" onclick="type(5)" v-if="SingeCount>4">查看更多</div>
    </div>
    </div>
    <!--自由行-->
    <div class="swiper-slide search-content con1" v-if="FreeCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in ProductList.FreeList">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">机票+酒店</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
        </ul>
    </div>
    <!--跟团游-->
    <div class="swiper-slide search-content con2" v-if="GroupCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in ProductList.GroupList">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">跟团游</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
        </ul>
    </div>
    <!--周边游-->
    <div class="swiper-slide search-content con3" v-if="SideCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in ProductList.SideList">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">周边游</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
        </ul>
    </div>
    <!--签证-->
    <div class="swiper-slide search-content con4" v-if="VisaCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in ProductList.VisaList">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">签证</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
        </ul>
    </div>
    <!--城市玩乐-->
    <div class="swiper-slide search-content con5" v-if="SingeCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in ProductList.SingeList.slice(0, 3)">
            <router-link :to="{path:'freeDetail',query: {ID: item.ProductID}}">
              <div class="search-img">
                <img v-bind:src="item.ImagePath">
                <em class="mark-type">城市玩乐</em>
                <em class="mark-key">{{item.Destination}}</em>
              </div>
              <div class="search-infor">
                <h1>{{item.Title}}</h1>
                <p>{{item.SubTitle}}</p>
                <span>￥<i class="price">{{item.Price}}</i><i>起</i></span>
              </div>
            </router-link>
         </li>
        </ul>
    </div>


    </div>
    </div>




    </div>
</template>

<script>
  import'../../js/libs/swiper.min.js'
  export default {
  data () {
    return {
      num:0,
      ProductList:[],
      navtab:[
         {name:"全部",count:0},
         {name:"机票+酒店",count:0},
         {name:"跟团游",count:0},
         {name:"周边游",count:0},
         {name:"签证",count:0},
         {name:"城市玩乐",count:0}
      ],
      TotalCount:0,
      FreeCount:0,
      GroupCount:0,
      SideCount:0,
      VisaCount:0,
      SingeCount:0,
      mySwiper:null
    }
  },
  mounted(){   //页面加载完成执行函数
    this.getlistData();
    this.swiperMethod();
  },
  methods:{
      //获取搜索结果
    getlistData:function(){         
         const _this=this;
         this.$http.post(this.GLOBAL.serverSrc+"Search/GetSearchResultList",this.qs.stringify({'Keyword':this.$route.query.key}))
             .then(function(res){                                     
              _this.ProductList=res.data.ProductList;  
              _this.TotalCount=_this.navtab[0].count=res.data.ProductCount.TotalCount; 
              _this.FreeCount=_this.navtab[1].count=res.data.ProductCount.FreeCount;
              _this.GroupCount=_this.navtab[2].count=res.data.ProductCount.GroupCount;     
              _this.SideCount=_this.navtab[3].count=res.data.ProductCount.SideCount;    
              _this.VisaCount=_this.navtab[4].count=res.data.ProductCount.VisaCount;    
              _this.SingeCount=_this.navtab[5].count=res.data.ProductCount.SingeCount; 
        })
    },
    swiperMethod:function(){
        var _this=this;
        var mySwiper = new Swiper ('.swiper-container', {
        autoHeight: true,
        observer: true,  //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true,  //修改swiper的父元素时，自动初始化swiper
        onSlideChangeStart: function (swiper) {
            _this.num = mySwiper.activeIndex;  //滑动过程中菜单选中状态跟着变化
           // console.log(_this.num);
        },

    })
        this.mySwiper=mySwiper;
    },
    navtabClick:function(index){
      console.log(index);
      this.num = index;
      console.log(this.num);

      this.mySwiper.slideTo(index, 500);
    }   
  }
}
</script>
<style coped lang="scss">
   @import'../../style/libs/swiper.min.css';
   .header-sub {z-index: 10;width: 100%;height: 1rem;background-color: #fff;line-height: 1rem;text-align: center;font-size:.5rem;position: fixed}
   .search-navtab{height: 1rem;font-size: .32rem;width: 100%;overflow-x: scroll;display:-webkit-box;position: fixed;z-index: 9;padding-top: 1rem;background:#d2d5dc;
     li{text-align: center;cursor: pointer;padding: .1rem .25rem;color: #fff;margin: .2rem;border-radius: 22px}
     .current{background-color: #fbb03b}
   }
   .search-content{width:100%;background-color: #eeedf2;overflow:hidden;}
   .category{font-size:.34rem;padding:.3rem 0 .1rem .3rem;background-color:#fff;text-align:left}
   .category-content{margin-bottom:.25rem}
   .search-pro{padding:.05rem .3rem;background-color: #fff;
     li{padding: .1rem 0;position: relative;overflow:hidden}
   }
   .search-img{width:35%;float:left;height: 1.6rem;background-color:#ccc;
    img{width: 100%;}
    em{display: inline-block;text-align:center;padding:.05rem 0;color: #fff;font-size: .26rem;width:1rem;text-overflow:ellipsis;white-space:nowrap;overflow: hidden;position: absolute;bottom:.35rem;}
    }
   .mark-type{left:.2rem;background-color:rgba(254,109,0,0.8);border-radius:3px 0 0 3px}
   .mark-key{left:1.19rem;background-color:rgba(116,46,168,0.8);border-radius:0 3px 3px 0}
   .search-infor{float: right;width: 62%;padding:.05rem 0;color: #444444;text-align:left;
     h1{font-size: .36rem;height: .37rem;margin-bottom: .2rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}
     p{font-size: .28rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}
     span{font-size: .24rem;color: #ff6d00;display:block;padding:.25rem 0 0 .1rem;text-align:left}
     i.price{color: #ff6d00;font-size: .4rem;}
     i{color: #777777;font-size: .2rem;}
   }
   .search-more{height:.8rem;line-height:.8rem;color:#4ea2ff;text-align:center;font-size:.3rem;border-top:1px solid #edecf1;background-color:#fff;}
    #content{padding-top:2rem;height:100%}  
   .swiper-slide-active{height:auto;background-color:#fff;min-height:400px}
</style>

