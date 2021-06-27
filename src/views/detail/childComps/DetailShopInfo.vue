<template>
  <div class="shop-info">
    <div class="shop-top">
        <img :src="shop.logo" alt="">
        <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
            <div class="info-sells">
                <div class="sells-count">
                    {{sellCountFilter}}
                </div>
                <div class="sells-text">总销量</div>
            </div>
            <div class="info-goods">
                <div class="goods-count">
                    {{shop.goodsCount}}
                </div>
                <div class="goods-text">全部宝贝</div>              
            </div>
        </div>
        <div class="shop-middle-item shop-middle-right">
            <table>
                <tr v-for="(item,index) in shop.score" :key="index"> 
                    <td>{{item.name}}</td>
                    <td class="scroe" :class="{'scroe-better' : item.isBetter}">{{item.score}}</td>
                    <td class="better" :class="{'better-more' : item.isBetter}">
                        <span>{{item.isBetter ? '高' : '低'}}</span></td>
                </tr>
            </table>
        </div>
    </div>
    <div class="shop-buttom">
        <div class="enter-shop">进店逛逛</div>
    </div>
 </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
      shop:{
          type: Object,
          default() {
            return {};
          }
      }
  },
  data() { 
    return {

    }
  },
  computed: {
    sellCountFilter() {
        const sells = this.shop.sells
        if (sells < 10000) {
            return  sells
        }else {
            return  (sells/10000).toFixed(1)+ '万'
        }
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
.shop-info{
    padding: 20px 8px;
    border-bottom: 3px solid #f2f5f8;
}
.shop-top{
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
}
.shop-top img{
    width: 50px;
    height: 50px;
    border-radius:60%;
    border: 1px solid rgba(0, 0,0, .1)
}
.shop-top .title{
    margin-left:10px;
    align-items: center;
}
.shop-middle{
    margin-top: 10px;
    display: flex;
    align-items: center;
}
.shop-middle-item{
    flex: 1;
}
.shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    color:#333;
    text-align: center;
    /* 在右边框弄一条边界线 */
    border-right: 1px solid rgba(0, 0,0, .1)
}
.sells-count, .goods-count{
    font-size: 18px;
}
.sells-text, .goods-text{
    margin-top: 10px;
    font-size: 15px;
}
.shop-middle-right{
    font-size: 13px;
    color: #333;
}
.shop-middle-right table{
    width: 120px;
    margin-left: 30px;
}
.shop-middle-right table td{
    padding: 5px 0;
}
.shop-middle-right .scroe{
    color:#5ea732;
}
.shop-middle-right .scroe-better{
    color:#f13e3a
}
.shop-middle-right .better span{
    background: #5ea732;
    color:#fff;
    text-align: center;
}
.shop-middle-right .better-more span{
    background: #f13e3a;
}
.shop-buttom{
    margin-top: 15px;
    /* line-height: 30px; */

}
.enter-shop{
    color:rgb(92, 88, 88);
    margin: 0 auto;
    width: 50%;
    text-align: center;
    border-radius: 50px;
    line-height:30px;
    border: 1px solid rgba(0, 0,0, .1);
    background-color:rgba(104, 151, 209, 0.1);
}
</style>