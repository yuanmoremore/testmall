<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
 </div>
</template>

<script>
export default {
  name: 'NavBar',
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

<style>
.nav-bar{
    display: flex;
    height: 44px;
    line-height:44px;
    text-align: center;  /*文字居中 */
    box-shadow: 0 1px 1px rgba(100,100,100,.1); /*设置模块边界的阴影  */
}
.left,.right{
    height: 44px;
    width:60px;
}
.center{
     flex:1; /*当左右两个（或者其他，反正只剩一个时）都有明确的值时（宽度或者高度）flex:1;设置为1，就可以占据剩下的全部空间 */
}
</style>