<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <div class="info-desc">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" 
               :key="index" :src="item" @load="imgLoad" alt="">
      </div>
 </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
      detailInfo:{
          type:Object,
          default(){
              return {};
          }
      }
  },
  data() { 
    return {
        counter:0,
        imagesLenght:0,
    }
  },
  components:{
  },
  methods:{
    imgLoad(){ //将图片是否加载完成的信息发送出去
        if (++this.counter === this.imagesLenght) { //当加载的图片和imagesLenght相等时才发出去
            this.$emit('dgoodsimageload')       
        }
    }
  },
  watch:{ //watch:当监 听的某个属性值发生变化时，就执行函数
      detailInfo(){  //将detailInfo.detailImage[0].list.length的长度（就是所有的图片数量）赋给imagesLenght
          this.imagesLenght = this.detailInfo.detailImage[0].list.length
      }
  },
  mounted() {

  },
 }
</script>

<style scoped>
.info-desc{
    padding:5px;
    font-size: 14px;
    border-bottom: 3px solid rgba(100, 100, 100, .1);
}
.info-key{
    padding:5px;
    font-size: 14px;
    border-bottom: 3px solid rgba(100, 100, 100, .1);
}
/* .info-list{
    position:relative;
} */
.info-list img{
    height:100%;
    width:100%;    
}
</style>