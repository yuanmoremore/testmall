<template>
  <div id="home">
      <nav-bar class="home-nav">
        <!-- <template v-slot:left></template> -->
        <template v-slot:center>
          <h2>购物街</h2>
        </template>
        <!-- <template v-slot:right> </template> -->
      </nav-bar>
       <tab-control class="tab-control" 
                  :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabControl1"
                  v-show="isTabFixed"></tab-control>     
      <scroll class="content" 
              ref="scroll" 
              :probe-type="3" 
              @scroll="scrollContent" 
              :pullupload="true"
              @pullingUp="loadMore">
              <!-- :banners="banners" 将请求的数据动态绑定到home-swiper的 banners中 -->
      <home-swiper :banners="banners" @SwiperImageLoad="SwiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control  
                  :titles="['流行','新款','精选']" 
                  @tabClick="tabClick"
                  ref="tabControl2"
                  ></tab-control>
      <goods-list :goods="ShowGoods"></goods-list>
      </scroll>
      <!-- .native:监听组件根元素的原生事件 但是在cli4中不需要也能监听组件根元素的原生事件-->
      <!-- <back-top @click.native="backtopclick"></back-top> -->
      <back-top @click="backtopclick" v-show="isShowBackTop"></back-top>
     
 </div>
</template>
<script>
import {emitter} from '../../mitt/mitt.js'
import {getHomeMultidata, getHomeGoods} from "network/home.js";
import {itemListenerMixin,backTopMixin} from '../../common/mixin'


import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/TabControl/TabControl.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import Scroll from '../../components/common/scroll/Scroll';






export default {
  name: 'home',
  computed: {
    ShowGoods(){
      return this.goods[this.currentType].list
    }
    
  },
  mixins: [itemListenerMixin,backTopMixin],
  data() { 
    return {
      // result:null, //保存网络请求过来的数据（没有保存全部数据，是一部分）
      banners:[],//保存网络请求过来的数据
      recommends:[],//保存网络请求过来的数据
      goods:{//保存网络请求过来的数据（流行新款精选）
        'pop':{page:0,list:[]},//更加具体的保存数据。这里是流行的数据  page：0是一个页面，list[]就加载一个页面的数据。page增加，list就增加
        'new':{page:0,list:[]},//‘默认请求第一页的数据，第二页之后的等用户上拉操作之后再请求
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      tabOffSetTop : 0,
      isTabFixed:false,
      saveY:0, //设置一个坐标变量  
      itemImgListener:null,
      
    }
  },
  unmounted(){//unmounted是“销毁”的意思，当我们离开这个页面的时候，便会调用这个函数 
    // console.log('2222');
  },
  activated(){
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0,this.saveY,0) //返回home组件时的坐标
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrollY(); //拿到home组件离开时的坐标
    emitter.off('itemImageLoad',this.itemImgListener) //取消全局事件的监听
  },
  created() { //当页面创建好时就发送网络请求
    //像created()这种特殊的生命周期函数，最好只在里面写大的逻辑，更加具体的操作逻辑放到其他地方（如methods）
    //1.请求轮播图和商品推荐的数据
    this.getHomeMultidata()//这里函数名和网络请求的函数名重复了，所以要使用this来指向methods的函数getHomeMultidata()。不重名可以不用

    //2.请求数据流（流行/新款/精选）的数据，每个部分都需要请求
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    this.tabClick(0)
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,

    
  },
  methods:{
    //事件监听相关的方法
    tabClick(index){
      switch (index){
        case 0 : this.currentType = 'pop'
        break;
        case 1 : this.currentType = 'new'
        break;
        case 2 : this.currentType = 'sell'
        break;
      }
      //解决tabControl突然不见的问题
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    scrollContent(position){ 
      //隐藏BackTop。 position是子组件传过来的信息
      this.isShowBackTop = (-position.y) > 1000 //当滚动位置大于1000显示BackTop    
      //决定tabControl是否吸顶（position：fixed）
      this.isTabFixed = (-position.y) > this.tabOffSetTop 
    },
    loadMore(){//监听scroll组件的上拉加载更多操作，并进行网络请求
      this.getHomeGoods(this.currentType)//this.currentType
    },

    //获取TabControl的offsetTop    offsetTop:元素到offsetParent顶部的距离
    //所有组件都有一个属性$el:用于获取组件的元素
    SwiperImageLoad(){
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffSetTop = this.$refs.tabControl2.$el.offsetTop
    },



    //网络请求相关的方法
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.result = res;  res是全部数据
        //保存数据
        this.banners = res.data.banner.list;  //res中的部分数据
        this.recommends = res.data.recommend.list; //res中的部分数据
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1 //页面加一
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list); //将请求到的list数据push到goods[type].list
        this.goods[type].page +=1
        this.$refs.scroll.finishPullUp() //可以多次上拉加载更多
      })
    }
  },
 }
</script>

<style scoped>
 #home{/* 固定导航栏 */
   /* padding-top:44px; */
   height: 100vh;
   position: relative;
 }
.home-nav{
  background-color: var(--color-tint);
  color: white;
  
  /* 固定导航栏 在使用浏览器原生滚动时，为了让导航不跟随一起滚动*/
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/* tab-control组件悬停，与nav-bar组件相连 top:44px必须设置，44px是nav-bar组件的高度 移动端兼容性还可以，页面兼容性一般 */
.tab-control{
  /* position: sticky; 因为使用了better-scroll滚动插件，position: sticky;不会在起效果，因为已经监听不了了*/
  /* top:44px; */

  position: relative;
  /* z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。 */
  z-index: 9;
}
.content{
  /* 两种方法给better-scroll设置可以滚动的（显示）区域样式 */
  /* height: calc(100% - 93px);
  overflow: hidden;
  margin-top:44px; */

  overflow: hidden;   /* 作用：溢出隐藏、清除浮动、解决外边距塌陷 */

  /* 使用定位的方法 */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}



</style>