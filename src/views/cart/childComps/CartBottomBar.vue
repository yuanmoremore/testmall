<template>
  <div class="bottom-bar">
    <div class="check-content">
      <cheak-bottom class="check-bottom" :isCheck="isCelectAll" @click="checkClick"></cheak-bottom>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>
    <div class="calculate">
      结算({{checkLength}})
    </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CheakBottom from 'components/content/CheakBottom/CheakBottom.vue'

export default {
  name: 'CartBottomBar',
  data() { 
    return {

    }
  },
  components:{
    CheakBottom
  },
  computed: {
    ...mapGetters(['cartList']),
      totalPrice(){
        return '￥' + this.cartList.filter(item => {
          return item.check
        }).reduce((preValue,item) => {
          return preValue+ item.price * item.count
        },0).toFixed(2) //保留两位小数
      },
      checkLength(){
        return this.cartList.filter(item => {return item.check}).length;
      },
      isCelectAll(){
        //无论下面哪种方法都需要先判断在空数组是为false的情况
        if (this.cartList.length === 0) { return false}
        //1.filter
        // return !this.cartList.filter(item => !item.check).length;
        //2.find
        // return !this.cartList.find(item => !item.check);
        //3.every
        // every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
        // 注意：若收到一个空数组，此方法在一切情况下都会返回 true。(但是在这里，上面已经在最开始就做了一个判断，空数组就返回false)
        // 若有一个是false就返回false
        return this.cartList.every(item => item.check);

        // 4.遍历
        // for (let item of this.cartList){
        //   if (!item.check) {
        //     return false;
        //   }
        // }
        // return true;

      } 
  },
  methods:{ 
    checkClick(){
      // 用isCelectAll，是因为本来isCelectAll就是判断是否是全部选中的计算属性
      // forEach() 方法对数组的每个元素执行一次提供的函数。这里提供的函数就是为每个item.check赋false或true
      if (this.isCelectAll) { //全部选中
        this.cartList.forEach(item => item.check = false)
      } else { //部分不选中或者全部不选中
        this.cartList.forEach(item => item.check = true)
      }
    }
  },
  mounted() {

  },
 }
</script>

<style scoped>
.bottom-bar{
  display: flex;
  height: 40px;
  background-color: #eee;
  position:relative;
  line-height: 40px;

}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 8px;
  width: 60px;
}
.check-bottom{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price{
  margin-left: 20px;
  flex: 1;
}
.calculate{
  width: 100px;
  background-color: rgb(255, 0, 21,0.5);
  text-align: center;
  color: #333;
}
</style>