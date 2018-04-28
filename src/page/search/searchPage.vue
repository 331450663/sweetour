<template>
    <header>
        <div class="search-header">
             <router-link :to="'home'">
                 <img src="../../images/public/mobile-logo.png" />
             </router-link>
        </div>
        <div class="search-input">
             <p>搜索</p>
             <input type="text" placeholder="目的地/关键字/景点" />
        </div>
    </header>
</template>

<script>
  import pageFooter from '../../components/footer/footer'
  export default {
  data () {
    return {

    }
  },
  methods:{



  }
}

   

</script>

<style coped lang="scss">
      $width: 36%;
      .search-header {text-align: center;}
      .search-header img { width: 36%;}
      .search-input{background-color:#ebedf1;height: 1.5rem;text-align: center;
            p{font-size: .32rem;padding:.1rem 0;}
            input{border:0;vertical-align:top;}
      }
</style>

