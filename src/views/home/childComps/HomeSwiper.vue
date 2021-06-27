<template>
<div>
      <swiper>
        <swiper-item v-for="(item, id) in banners" :key="id" >
          <a  :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad">
          </a>
        </swiper-item>
      </swiper>
</div>

</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/"
export default {
  name: 'HomeSwiper',
  data() { 
    return {
      isLoad: false,
    }
  },
  props: {
      banners:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      if(!this.isLoad){ //减少发送次数，加载一次获得的数据就足够准确了，
        this.$emit('SwiperImageLoad')
        this.isLoad = true
      }
    }
  },
  mounted() {

  },
 }
</script>

<style>
</style>