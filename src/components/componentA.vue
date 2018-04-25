<template>
  <div class="hello">
       {{msg}}
       <button @click="onClickme()">click</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'this is my component',
    }
  },
  props:['msgfather'],
  methods:{
     onClickme:function(){
       console.log(this.msgfather)
     }
  }
}
</script>