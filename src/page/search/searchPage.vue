<template>
    <header>
        <div class="search-header">
             <router-link :to="'home'">
                 <img src="../../images/public/mobile-logo.png" />
             </router-link>
        </div>
        <div class="search-input">
             <p>搜索</p>
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

<style scoped>
      .search-header {text-align: center}
      .search-header img { width: 36%;}
      .search-input{background-color:#ebedf1;height: 1.5rem;text-align: center;}
      .search-input p{font-size: .32rem;padding:.05rem 0;}
</style>

