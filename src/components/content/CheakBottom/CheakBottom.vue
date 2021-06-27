<template>
  <div class="cheak-bottom" :class="{check: isCheck}">
      <img src="~assets\img\cart\tick.svg" alt="">
 </div>
</template>

<script>
export default {
  name: 'CheakBottom',
  props: {  
      isCheck:{
          type:Boolean,
          default:false
      }
  },
  data() { 
    return {

    }
  },
  components:{
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style scoped>
.cheak-bottom{
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check{
    border-color: red;
    background-color: red;
}
</style>    