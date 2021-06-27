<template>
      <swiper class="detailswiper">
          <swiper-item v-for="item in topImages" >
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/"


export default {
  name: 'DetailSwiper',
  props: {
      topImages:{
          type:Array,
          default(){
              return []
          }
      }
  },   
  data() { 
    return {

    }
  },
  components:{
      Swiper,
      SwiperItem

  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style scoped>
.detailswiper{
    height:380px;
    overflow: hidden;
}

</style>