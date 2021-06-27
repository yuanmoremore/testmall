<template>
  <div id="shop-item">
      <div class="item-selector">
        <cheak-bottom :isCheck="product.check" @click="checkClick"></cheak-bottom>
      </div>
      <div class="item-img">
          <img :src="product.image" alt="商品图片">
      </div>
      <div class="item-info">
          <div class="item-title">{{product.title}}</div>
          <div class="item-desc">{{product.desc}}</div>
          <div class="item-bottom">
              <div class="item-price ">￥{{product.price}}</div>
              <div class="item-count ">×{{product.count}}</div>
          </div>    
      </div>
 </div>
</template>

<script>
import CheakBottom from 'components/content/CheakBottom/CheakBottom.vue'
export default {
  name: 'CartListItem',
  props: {
      product:{
          type: Object,
          default(){
              return {}
          }
      }
  },
  data() { 
    return {

    }
  },
  components:{
    CheakBottom
  },
  methods:{
    checkClick(){
      this.product.check =  !this.product.check
    }
  },
  mounted() {

  },
 }
</script>

<style scoped>
 #shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.item-bottom {
  display: flex;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
 .item-count{
    margin-left: 150px;
}
.item-bottom .item-price {
  color: orangered;
}

</style>