<template>
    <div>
    <header>
        <div class="search-header">
             <router-link :to="'home'">
                 <img src="../../images/public/mobile-logo.png" />
             </router-link>
             <i class="iconfont icon-ziyuandianhua" @click="customer()"></i>
        </div>
        <div class="search-input">
             <p>搜索</p>
             <input type="text" placeholder="目的地/关键字/景点" v-model="keyword" @keyup="getTagList(keyword)" @keyup.enter="search()"/>
             <i class="iconfont icon-huaban-dianhua" @click="search()"></i>
        </div> 
    </header>
    <ul class="result" v-if="tagList!==null">
        <li v-if="tagList.FreeCount!==0">
            <router-link :to="{path:'searchResult',query: {type: '1', key: keyword}}">
               <div>
               <span class="title">机票+酒店</span>
               <i class="count">共{{tagList.FreeCount}}个结果</i>
               </div>
            </router-link>
        </li> 
        <li v-if="tagList.GroupCount!==0">
            <router-link :to="{path:'searchResult',query: {type: '2', key: keyword}}">
               <div>
               <span class="title">跟团游</span>
               <i class="count">共{{tagList.GroupCount}}个结果</i>
               </div>
            </router-link>
        </li> 
        <li v-if="tagList.SideCount!==0">
            <router-link :to="{path:'searchResult',query: {type: '3', key: keyword}}">
               <div>
               <span class="title">周边游</span>
               <i class="count">共{{tagList.SideCount}}个结果</i>
               </div>
            </router-link>
        </li> 
        <li v-if="tagList.VisaCount!==0">
            <router-link :to="{path:'searchResult',query: {type: '4', key: keyword}}">
               <div>
               <span class="title">签证</span>
               <i class="count">共{{tagList.VisaCount}}个结果</i>
               </div>
            </router-link>
        </li> 
        <li v-if="tagList.SingeCount!==0">
            <router-link :to="{path:'searchResult',query: {type: '5', key: keyword}}">
               <div>
               <span class="title">城市玩乐</span>
               <i class="count">共{{tagList.SingeCount}}个结果</i>
               </div>
            </router-link>
        </li> 
    </ul>
    </div>
</template>

<script>
  export default {
  data () {
    return {
      keyword:null,
      tagList:null
    }
  },
  methods:{
   //获取搜索结果
   getTagList:function(Keyword){         
         const _this=this;
         this.$http.post(this.GLOBAL.serverSrc+'Search/GetTagList_APP',this.qs.stringify({'Keyword':Keyword}))
             .then(function(res){
              _this.tagList=res.data;              
        })
    },
    search:function(){
         if(this.keyword == null) {
          alert("请输入搜索目的地关键字");
          return;
         }
         else if (this.keyword.length > 30) {
          alert('搜索内容必须小于30个字');
          return;
         }
         else if (this.keyword == '目的地/关键字/景点') {
          alert('请输入搜索关键字');
          return;
         }else{
          this.$router.push({path:'searchResult',query: {type: '0', key: this.keyword}})
         }
    },
    customer:function(){
      window.location.href = this.GLOBAL.customer;
    }

  }
}
</script>
<style coped lang="scss">
      .search-header {text-align: center;position:relative;
        img { width: 34%;}
        i {position:absolute;font-size:.6rem;right:.2rem;top:.05rem;color:#9f9f9f;}
      }
      .search-input{background-color:#ebedf1;height: 1.53rem;text-align: center;position:relative;
            p{font-size: .35rem;padding:.2rem 0;}
            input{border:0;vertical-align:top;width: 96%;background: #fff;height: .6rem;line-height:.6rem;text-align:center;font-size: .28rem;}
            i{position:absolute;right:.3rem;bottom:.08rem;font-size:.37rem;color:#9f9f9f;}
      }
      .result {
        margin-top:.25rem;
       li{
        font-size:.28rem;line-height:.6rem;border-bottom:1px solid #eee;padding:0 .2rem;clear:both;height:.6rem;
        a{color:#000;}
        div{height:.6rem;}
        .title{float:left;}
        .count{float:right;}
        }
    }
</style>

