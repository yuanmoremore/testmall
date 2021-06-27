<template>
  <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
 </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: { //父传子
      recommends: {  //从父组件home中拿到数据
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
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  /*设置首页中间的灰条样式  
  border-bottom表示对边框的底部进行设置；
　　border-bottom 属性是一种复合属性，用于设置对象的下边框的宽度、样式和颜色值。
   solid 表示实线 8px表示8像素 都免是颜色 */
  border-bottom: 10px solid #eee;
  }
.recommend-item{
  flex: 1;
}
.recommend-item img{
  /* 设置图片大小 */
  /* width:65px;
  height:65px; */
  width: 80%;
  margin-bottom: 10px;
}
</style>