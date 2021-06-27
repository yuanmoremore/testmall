<template>
<!-- <div   v-if="Object.keys(goodsItem).length !== 0" > -->
  <div class="goods-item" @click="itemClick">
      <!-- 监听图片加载完成的方法：
      原生方法：img.onload = function(){}
      vue方法：@load="方法" -->
      <!-- <img :src="goodsItem.show.img" alt="" @load="imgeLoad"> -->
      <img :src="showImage" alt="" @load="imgeLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <span class="price">{{goodsItem.price}}</span>
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>
 </div>
<!-- </div> -->

</template>

<script>
import {emitter} from '../../../mitt/mitt.js' 
export default {
  name: 'GoodsListItem',
  props: {
      goodsItem:{
          type:Object,
          default(){
              return {};
          }
      }
  },
  data() { 
    return {

    }
  },
  components:{
  },
  computed:{
    //有两个路由都使用了这个组件，但是两个路由请求过来的数据img放的位置不一致，所以需要用条件判断一下
    showImage(){ 
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    imgeLoad(){ //将图片是否加载完成的信息发送出去
      emitter.emit('itemImageLoad')


      //用监听路由来解决两个路由都发送同一个事件的问题
      // if (this.$route.path.indexOf('/home') ){ //当跳转到'/home'路由，就发送事件homeitemImageLoad
      //         emitter.emit('homeitemImageLoad')
      // }else if (this.$route.path.indexOf('/detail')) {//当跳转到'/detail'路由，就发送事件detailitemImageLoad
      //         emitter.emit('detailitemImageLoad') 
      // }

    }

    ,
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },
  mounted() {

  },
 }
</script>

<style scoped>
  .goods-item {
      padding-bottom:40px;
      position: relative;
      width:48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
    .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
    .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>