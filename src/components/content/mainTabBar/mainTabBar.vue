<template>
    <tab-bar>
      <tab-bar-item link="/home" activeColor="red">
      <!-- 路径前面使用@表示在src这个文件中，无论怎么移动都不需要改路径了 因为在build->webpack.base.conf.js中的resolve中配置了alias（别名） -->
        <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-item>
          <img src="../../../assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/category" activeColor="red">
      <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-icon-item>
          <img src="../../../assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/cart" activeColor="red">
      <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-item>
          <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item link="/profile" activeColor="red">
      <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-item>
          <img src="../../../assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../../common/tab-bar/TabBar.vue'
import TabBarItem from '../../common/tab-bar/TabBarItem.vue'

export default {
  name: 'mainTabBar',
  data() { 
    return {

    }
  },
  components:{
      TabBar,
    TabBarItem
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style>
</style>