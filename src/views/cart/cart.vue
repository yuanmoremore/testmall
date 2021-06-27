<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
        <template v-slot:center >
            <div>
              <!-- 购物车({{cartLength}}) -->
              购物车({{length}})
            </div>
        </template>      
    </nav-bar>
    <!-- 商品列表 -->
    <scroll class="content" ref="cartscroll">
      <cart-list></cart-list>
    </scroll>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
  name: 'cart',
  data() { 
    return {

    }
  },
  components:{
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  computed: {
    //将getters转成计算属性
    //两种方法
    //第一种,数组语法的用法
    // ...mapGetters(['cartLength']) //想要用Getters的什么属性就加进来，比如cartLength
    //第二种，对象语法的用法
    ...mapGetters({
      length:'cartLength',  //length可以随意命名，length是对应Getters里的cartLength属性。适合想给Getters的某个属性改名
      cartList:'cartList'
    })

  },
  methods:{

  },
  activated(){
    this.$refs.cartscroll.refresh();
  },
  mounted() {

  },
 }
</script>

<style scoped>
.cart{
  height: 100vh;
}
.content{
  height: calc(100% - 93px - 40px);
  overflow: hidden;
}
.nav-bar{
  background-color:var(--color-tint);
    color:#fff;

    /* 文字加粗 */
  font-weight: 700;
}
</style>

