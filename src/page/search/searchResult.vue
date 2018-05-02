<template>
    <div>
    <header class="header-sub">
            <h1>{{this.$route.query.key}}</h1>
    </header>
    <ul class="search-navtab">
       <li class="typeall current">全部</li>
       <li class="type1">机票+酒店</li>
       <li class="type2">跟团游</li>
       <li class="type3">周边游</li>
       <li class="type4">签证</li>
       <li class="type5">城市玩乐</li>
    </ul>
    <div class="swiper-container" id="content">
    <div class="swiper-wrapper">
    <!--全部分类-->
    <div class="swiper-slide search-content">
    <!--自由行-->
    <div class="category-content" v-if="ProductCount.FreeCount>0">
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
       <div class="search-more" onclick="type(1)" v-if="ProductCount.FreeCount>4">查看更多</div>
    </div>
    <!--跟团-->
    <div class="category-content" v-if="ProductCount.GroupCount>0">
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
       <div class="search-more" onclick="type(2)" v-if="ProductCount.GroupCount>4">查看更多</div>
    </div>
    <!--周边游-->
    <div class="category-content" v-if="ProductCount.SideCount>0">
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
       <div class="search-more" onclick="type(3)" v-if="ProductCount.SideCount>4">查看更多</div>
    </div>
    <!--签证-->
    <div class="category-content" v-if="ProductCount.VisaCount>0">
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
       <div class="search-more" onclick="type(4)" v-if="ProductCount.VisaCount>4">查看更多</div>
    </div>
    <!--城市玩乐-->
    <div class="category-content" v-if="ProductCount.SingeCount>0">
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
       <div class="search-more" onclick="type(5)" v-if="ProductCount.SingeCount>4">查看更多</div>
    </div>
    </div>
    <!--自由行-->
    <div class="swiper-slide search-content con1">
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
    <div class="swiper-slide search-content con2">
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
    <div class="swiper-slide search-content con3">
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
    <div class="swiper-slide search-content con4">
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
    <div class="swiper-slide search-content con5">
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
  export default {
  data () {
    return {
      ProductCount:[],
      ProductList:[]
    }
  },
  mounted(){   //页面加载完成执行函数
   this.getlistData()
  },
  methods:{
      //获取搜索结果
    getlistData:function(){         
         const _this=this;
         this.$http.post(this.GLOBAL.serverSrc+"Search/GetSearchResultList",this.qs.stringify({'Keyword':this.$route.query.key}))
             .then(function(res){
              _this.ProductCount=res.data.ProductCount;           
              _this.ProductList=res.data.ProductList;                  
        })
    },

  }
}
</script>
<style coped lang="scss">
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

