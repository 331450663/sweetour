<template>
    <div>
        <ul>
            <li 
            v-for="(item,index) in tabs" 
            :class="{active:index == num}"
             @click="tab(index)">{{item}}</li>
        </ul>
        <div class="tabCon">
            <div 
            v-for='(itemCon,index) in tabContents' 
            v-show=" index == num">{{itemCon}}</div>
        </div>
    <page-footer></page-footer>
    </div>
</template>

<script>
  import pageFooter from '../../components/footer/footer'
  export default {
  data () {
    return {
        tabs: ["标题一", "标题二","标题三"],
        tabContents: ["内容一", "内容二","内容三"],
        num: 0
    }
  },
  methods: {
        tab(index) {
            this.num = index;
        }
    },
  components:{pageFooter}
}

   

</script>

<style scoped>
      ul li{float:left;font-size:.32rem;width:33%;line-height:1rem;height:1rem}
      .tabCon{clear:both;font-size:.32rem;background-color:#eee;height:1rem}
      .active{color:#ff5a3a}
</style>

