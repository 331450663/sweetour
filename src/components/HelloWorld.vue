<template>
  <div class="hello">
    <h1 v-html="title"></h1>
    <input v-model="newItem" @keyup.enter="onEnter()"/>
    <ul>
      <li v-for="item in items" v-bind:class="{isFishinde:item.isFishinde}"  @click="finish(item)">
         {{item.lable}}
      </li>
    </ul>
    <ul>
      <li v-for="list in postitems">
        {{list.Title}}
      </li>
    </ul>
    <component-a msgfather="hello"></component-a>
  </div>
</template>

<script>
import  ComponentA from './componentA'
import qs from 'qs'
export default {
  data () {
    return {
      title: '<b>this is my todulists</b>',
      newItem:'list',
      items:[
        {
          lable:'colding',
          isFishinde:true
        },
        {
          lable:'walking',
          isFishinde:false
        }
      ],
      postitems:[]
    }
  },
  components:{ComponentA},
  mounted(){   //页面加载完成执行函数
    this.getList()
  },
  methods:{
    finish:function(item){
      item.isFishinde=!item.isFishinde
    },
    onEnter:function(){
       this.items.push({
            lable:this.newItem,
            isFishinde:true
       });
       this.newItem='';
    },
    getList:function(){
         const _this=this;
         this.$http.get("http://123.57.185.4:80/api/GetSystemTime")
                .then(function(res){
                    console.log(res.data);
                    //this.postitems=response.visa;
                })
         this.$http.post("http://123.57.185.4:80/api/TC_Group_DetailPage_Init",qs.stringify({'id': 1111}))
                .then(function(res){
                    console.log(res.data);
                    _this.postitems=res.data.visa;
                })

    }
  }
}
</script>
<style scoped>
.hello{font-size:.32rem}
h1, h2 {
  font-weight: normal;
}
.isFishinde{color:green}

a {
  color: #42b983;
}
</style>
