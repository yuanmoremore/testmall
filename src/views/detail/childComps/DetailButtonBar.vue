<template>
  <div class="buttonbar">
      <div class="bar-item bar-left">
          <div>
              <i class="icon service"></i>
              <span class="text">客服</span>
          </div>
          <div>
              <i class="icon shop"></i>
              <span class="text">店铺</span>
          </div>
          <div>
              <i class="icon selet"></i>
              <span class="text">收藏</span>
          </div>
      </div>
      <div class="bar-item bar-right">
          <div class="cart" @click="addToCart">购物车</div>   
          <div class="buy">购买</div>
      </div>
 </div>
</template>

<script>
export default {
  name: 'DetailButtonBar',
  data() { 
    return {

    }
  },
  components:{
  },
  methods:{
      addToCart(){
          this.$emit('addCart')
      }
  },
  mounted() {

  },
 }
</script>

<style scoped>
.buttonbar{
    height:49px;
    background:#fff;

    position: relative;
    /* bottom: 49px; */
    /* position:fixed;
    left: 0;
    right: 0;
    bottom:0; */

    display: flex;
    text-align: center;
}
.bar-item{
    flex: 1;
    display: flex;
}
.bar-item>div{
    flex: 1;
}
.bar-left .text{
    font-size: 13px;
}
.bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
}
.bar-left .service{
    background-position: 0 -54px;
}
.bar-left .shop{
    background-position: 0 -98px;
}
.bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 58px;
}
.bar-right .cart{
    background-color: #ffe817;
    color: #333;
}
.bar-right .buy{
    background-color: #f69;
    color: #fff;
}
.sport-ball{
    position: absolute;
    left: 25px;
    bottom: 20px;
}
</style>