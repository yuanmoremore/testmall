<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :goodsItem="item"></goods-list-item>
 </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';
export default {
  name: 'GoodsList',
  props: {
      goods: {
          type:Array,
          default() {
              return [];
          }
      }
  },
  data() { 
    return {

    }
  },
  components:{
    GoodsListItem
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style scoped>
.goods{
    display: flex;
    /* flex-wrap:设置弹性元素是否在弹性容器中自动换行 */
    flex-wrap:wrap;
    /* 均等分   space-evenly:所有间隙均等*/
    /* justify-content: space-around;
    padding: 2px; */
    justify-content: space-evenly;
}
</style>