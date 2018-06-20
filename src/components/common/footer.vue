<template>
        <ul class="foo-nav-inner">
            <li class="foo-nav-inn-list">
               <router-link :to="'/home'">
                   <div class="foo-nav-img">
                        <img src="../../images/footer/index-ing.gif" class="active1" />
                        <img src="../../images/footer/index-ed.png" class="active2" />
                   </div>
                   <p class="foo-nav-where">首页</p>
               </router-link>
            </li>
            <li class="foo-nav-inn-list">
                <router-link :to="'/destination'">
                    <div class="foo-nav-img">
                         <img src="../../images/footer/whither-ing.gif" class="active1" />
                         <img src="../../images/footer/whither-ed.png" class="active2" />
                    </div>
                    <p class="foo-nav-where">目的地</p>
                </router-link>
            </li>
            <li class="foo-nav-inn-list">
                <router-link :to="'/notesList'">
                    <div class="foo-nav-img">
                         <img src="../../images/footer/custom-ing.png" class="active1" />
                         <img src="../../images/footer/custom-ed.png" class="active2" />
                    </div>
                    <p class="foo-nav-where">游记</p>
                </router-link>
            </li>
            <li class="foo-nav-inn-list">
                <router-link :to="'/member'">
                    <div class="foo-nav-img">
                         <img src="../../images/footer/my-ing.png" class="active1" />
                         <img src="../../images/footer/my-ed.png" class="active2" />
                    </div>
                    <p class="foo-nav-where">我</p>
                </router-link>
            </li>
        </ul>  
</template>

<script>


</script>

<style scoped>
    .foo-nav-inner{width:100%;height:1.2rem;position:fixed;bottom:0;left:0;background:#fff}  
    .foo-nav-inn-list{width:25%;float:left}
    .foo-nav-inn-list a{text-decoration:none;}
    .foo-nav-img{height:.7rem;width:.7rem;overflow:hidden;margin:0 auto}
    .foo-nav-img img{width:100%;vertical-align:top;}
    .foo-nav-where{font-size:.24rem;text-align:center;color:#61677b;margin: 0;padding: 0}
    .router-link-active .foo-nav-where{color:#ff6d00}
    .router-link-active .active1{display:block}
    .router-link-active .active2{display:none}
    .active1{display:none}
</style>
