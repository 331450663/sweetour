<template>
    <div>
    <header class="header-sub">
            <h1>{{this.$route.query.key}}</h1>
    </header>
    <ul class="search-navtab" id="search-navtab">
        <li v-for="(item,index) in navtab" :class="{current:num == index}"  @click="navtabClick(index)">{{item.name}}</li>
    </ul>
    <div class="swiper-container" id="content">
    <div class="swiper-wrapper">
    <!--全部分类-->
    <div class="swiper-slide search-content swiper-all">
    <!--自由行-->
    <div class="category-content" v-if="FreeCount>0">
       <h2 class="category">机票+酒店</h2>
       <ul class="search-pro">
         <li v-for="(item,index) in FreeList.slice(0, 3)">
            <router-link :to="{path:'/freeDetail',query: {ID: item.ProductID}}">
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
       <div class="search-more" @click="navtabClick(1)" v-if="FreeCount>4">查看更多</div>
    </div>
    <!--跟团-->
    <div class="category-content" v-if="GroupCount>0">
       <h2 class="category">跟团游</h2>
         <ul class="search-pro">
         <li v-for="(item,index) in GroupList.slice(0, 3)">
            <router-link :to="{path:'/freeDetail',query: {ID: item.ProductID}}">
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
       <div class="search-more" @click="navtabClick(2)" v-if="GroupCount>4">查看更多</div>
    </div>
    <!--周边游-->
    <div class="category-content" v-if="SideCount>0">
       <h2 class="category">周边游</h2>
       <ul class="search-pro">
         <li v-for="(item,index) in SideList.slice(0, 3)">
            <router-link :to="{path:'/freeDetail',query: {ID: item.ProductID}}">
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
       <div class="search-more" @click="navtabClick(3)" v-if="SideCount>4">查看更多</div>
    </div>
    <!--签证-->
    <div class="category-content" v-if="VisaCount>0">
       <h2 class="category">签证</h2>
       <ul class="search-pro">
         <li v-for="(item,index) in VisaList.slice(0, 3)">
            <router-link :to="{path:'/freeDetail',query: {ID: item.ProductID}}">
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
       <div class="search-more" @click="navtabClick(4)" v-if="VisaCount>4">查看更多</div>
    </div>
    <!--城市玩乐-->
    <div class="category-content" v-if="SingeCount>0">
       <h2 class="category">城市玩乐</h2>
       <ul class="search-pro">
         <li v-for="(item,index) in SingeList.slice(0, 3)">
              <div @click="singeRouter(item.SingleTypeID,item.ProductID)">
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
              </div>
         </li>
       </ul>
       <div class="search-more" @click="navtabClick(5)" v-if="SingeCount>4">查看更多</div>
    </div>
    </div>
    <!--自由行-->
    <div class="swiper-slide search-content" type="1" v-if="FreeCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in FreeList">
            <router-link :to="{path:'/freeDetail',query: {ID: item.ProductID}}">
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
    <div class="swiper-slide search-content" type="2" v-if="GroupCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in GroupList">
            <router-link :to="{path:'/freeDetail',query: {ID: item.ProductID}}">
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
    <div class="swiper-slide search-content" type="3" v-if="SideCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in SideList">
            <router-link :to="{path:'/freeDetail',query: {ID: item.ProductID}}">
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
    <div class="swiper-slide search-content" type="4" v-if="VisaCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in VisaList">
            <router-link :to="{path:'/freeDetail',query: {ID: item.ProductID}}">
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
    <div class="swiper-slide search-content" type="5" v-if="SingeCount>0">
        <ul class="search-pro">
         <li v-for="(item,index) in SingeList">
            <div @click="singeRouter(item.SingleTypeID,item.ProductID)">
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
            </div>
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
      // 当前选中产品类型
      num:0,
      // 产品数据
      FreeList:[],
      GroupList:[],
      SideList:[],
      VisaList:[],
      SingeList:[],
      navtab:[],
      
      // 产品数量
      TotalCount:0,
      FreeCount:0,
      GroupCount:0,
      SideCount:0,
      VisaCount:0,
      SingeCount:0,
      mySwiper:null,
      
      // 初始化产品分页
      pageFree: 1,
      pageGroup: 1,
      pageSide: 1,
      pageVisa: 1,
      pageSinge: 1,
      Keyword: this.$route.query.key
    }
  },
  mounted(){   //页面加载完成执行函数
    this.getlistData();
    this.swiperMethod();
    setTimeout(()=>{this.navtabClick(this.$route.query.type)},1000);
  },
  methods:{
      // 获取搜索结果
    getlistData:function(){         
         const _this=this;
         this.$http.post(this.GLOBAL.serverSrc+'Search/GetSearchResultList',this.qs.stringify({'Keyword':this.$route.query.key}))
             .then(function(res){                                     
             
             // 不同类型产品数据
              _this.FreeList=res.data.ProductList.FreeList;
              _this.GroupList=res.data.ProductList.GroupList;  
              _this.SideList=res.data.ProductList.SideList;  
              _this.VisaList=res.data.ProductList.VisaList;  
              _this.SingeList=res.data.ProductList.SingeList;    

              // 不同类型产品数量
              _this.TotalCount=res.data.ProductCount.TotalCount; 
              _this.FreeCount=res.data.ProductCount.FreeCount;
              _this.GroupCount=res.data.ProductCount.GroupCount;     
              _this.SideCount=res.data.ProductCount.SideCount;    
              _this.VisaCount=res.data.ProductCount.VisaCount;    
              _this.SingeCount=res.data.ProductCount.SingeCount; 
              
              // 生成导航
              if(_this.TotalCount>0){
                  _this.navtab.push({name:'全部'});
              }
              if(_this.FreeCount>0){
                  _this.navtab.push({name:'机票+酒店'});
              }
              if(_this.GroupCount>0){
                  _this.navtab.push({name:'跟团游'});
              }
              if(_this.SideCount>0){
                  _this.navtab.push({name:'周边游'});
              }
              if(_this.VisaCount>0){
                  _this.navtab.push({name:'签证'});
              }
              if(_this.SingeCount>0){
                  _this.navtab.push({name:'城市玩乐'});
              }

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
            document.body.scrollTop =0;//每次滑动到下一个目标滚动条都滚动到最上部
            if(_this.num <= 2) {
                document.getElementById('search-navtab').scrollLeft=-500;
            }
            if(_this.num >= 3) {
                document.getElementById('search-navtab').scrollLeft=500;
            }
        },
        onTouchEnd: function (Swiper) {
            var viewHeight = document.getElementsByClassName('swiper-wrapper')[0].offsetHeight;
            var contentHeight = document.getElementsByClassName('swiper-slide-active')[0].offsetHeight;
            //上拉加载
            if (mySwiper.translate <= viewHeight - contentHeight - 50 && mySwiper.translate < 0) {
              var PageIndex = 1;           
              var dataType = null;
              var type=document.querySelector(".swiper-slide-active").getAttribute("type");
              if(type == 1){
                _this.pageFree++;
                PageIndex = _this.pageFree;
                dataType = 'FreeList';
              }else if(type == 2){
                _this.pageGroup++;
                PageIndex = _this.pageGroup;
                dataType = 'GroupList';
              }else if(type == 3){
                _this.pageSide++;
                PageIndex = _this.pageSide;
                dataType = 'SideList';
              }else if(type == 4){
                _this.pageVisa++;
                PageIndex = _this.pageVisa;
                dataType = 'VisaList';
              }else if(type == 5){
                _this.pageSinge++;
                PageIndex = _this.pageSinge;
                dataType = 'SingeList';
              }else{
                return false;
              }
              _this.$http.post(_this.GLOBAL.serverSrc+'Search/GetSearchResultListByType',_this.qs.stringify({"Type": type,"PageIndex":PageIndex,'Keyword':_this.$route.query.key}))
              .then(function(res){
                 if(res.data.ProductList[dataType].length != 0){
                    var item=res.data;
                    for(var i=0;i<item.ProductList[dataType].length;i++){
                        if(dataType=='FreeList'){                       
                           _this.FreeList.push(item.ProductList[dataType][i]);
                          //_this.$set(_this.FreeList, _this.FreeList.length, item.ProductList[dataType][i]);
                        }
                        if(dataType=='GroupList'){
                          _this.GroupList.push(item.ProductList[dataType][i]);
                        }
                        if(dataType=='SideList'){
                          _this.SideList.push(item.ProductList[dataType][i]);
                        }
                        if(dataType=='VisaList'){
                          _this.VisaList.push(item.ProductList[dataType][i]);
                        }
                        if(dataType=='SingeList'){
                          _this.SingeList.push(item.ProductList[dataType][i]);
                        }                        
                    }             
                 }             
                 mySwiper.update();
              })
            }
        }
    })
      this.mySwiper=mySwiper;
    },
    navtabClick:function(index){
      this.num = index;
      this.mySwiper.slideTo(index, 500);
    },
    singeRouter:function(type,id){
      if(type=='4'){
          this.$router.push({path:'/wifiDetail',query: {ID:id}});
       }else{
          this.$router.push({path:'/cardDetail',query: {ID:id}});
      }
    }
  }
}
</script>
<style coped lang="scss">
   @import'../../style/libs/swiper.min.css';
   .header-sub {z-index: 10;width: 100%;height: 1rem;background-color: #fff;line-height: 1rem;text-align: center;font-size:.5rem;position: fixed}
   .search-navtab{height: .85rem;font-size: .32rem;width: 100%;overflow-x: scroll;display:-webkit-box;position: fixed;z-index: 9;padding-top: 1rem;background:#d2d5dc;
     li{text-align: center;cursor: pointer;padding: .1rem .25rem;color: #fff;margin: .16rem;border-radius: 22px}
     .current{background-color: #fbb03b}
   }
   .search-content{width:100%;overflow:hidden;}
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
     i{color: #777;font-size: .2rem;}
   }
   .search-more{height:.8rem;line-height:.8rem;color:#4ea2ff;text-align:center;font-size:.3rem;border-top:1px solid #edecf1;background-color:#fff;}
    #content{padding-top:2rem;height:100%}  
   .swiper-slide-active{height:auto;min-height:550px}
   .swiper-all{background-color: #eeedf2;}
</style>

