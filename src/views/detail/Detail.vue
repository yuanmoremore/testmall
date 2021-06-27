<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="navbar"></detail-nav-bar>
      <scroll class="content" ref="scroll" 
              :probe-type="3"
              @scroll="contentScroll"> 
        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shops"></detail-shop-info>
        <detail-goods-info :detail-info="detailinfo" @dgoodsimageload="detailimageload"></detail-goods-info>
        <detail-param-info :detailparaminfo="paraminfo" ref="param"></detail-param-info>
        <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
        <goods-list :goods="recommends" ref="recommed"></goods-list>
      </scroll>
      <detail-button-bar @addCart="addToCart"></detail-button-bar>
      <back-top @click="backtopclick" v-show="isShowBackTop"></back-top>
      <!-- <toast :message="Dmessage" :show="Dshow"></toast> -->

 </div>
</template>

<script>
import { getCurrentInstance} from 'vue'
import { provideToast } from 'components/common/toast/toast';

import {itemListenerMixin,backTopMixin} from '../../common/mixin'
import { mapActions } from 'vuex'
import DetailNavBar from './childComps/DetailNavBar.vue'



import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail.js"
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailButtonBar from './childComps/DetailButtonBar.vue'
import Toast from '../../components/common/toast/Toast.vue'



export default {
  name: 'Detail',
  mixins: [itemListenerMixin,backTopMixin],
  data() { 
    return {
        iid:null,
        topImages:[],
        goods:[],
        shops:{},
        detailinfo:{},
        paraminfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[], 
        currentIndex:0,
        // Dmessage:'',
        // Dshow:false,
    }
  },
  setup() {
        const { proxy } = getCurrentInstance();
        provideToast({
            width: '200px',        // 配置toast宽度
            duration: 2000        // 配置toast持续显示时长
        });
    },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailButtonBar,
    Toast,

  },
  methods:{
      ...mapActions({add:'addCart'}),
      detailimageload(){
        this.$refs.detailscroll && this.$refs.scroll.refresh()//图片一加载完成就刷新

        //获取每个部分的offsetTop
        this.themeTopYs= []
        this.themeTopYs.push(44);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommed.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE); //增加一个界限值

        // console.log(this.themeTopYs);
      },
      titleClick(index){ //监听DetailNavBar的点击事件，并将被点击的下标值传过来
        // console.log(index);
        //跳到对应的被点击部分（商品，参数，评论，推荐）  实现页面滚动，顶部标题亦会随着变化
        //-this.themeTopYs[index]+44 每一部分对应的位置，+44 是因为navbar占了44的高度
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index]+44,200)
      },
      contentScroll(position){
        //1.获取Y值
        const positionY = -position.y;

        //2.positionY和主题中值的对比
        // 划分为四个部分
        //positionY 在 0 和 7938  之间，index= 0
        //positionY 在 =7938 和 9120  之间，index= 1
        //positionY 在 =9120 和 9452  之间，index= 2

        //positionY 大于等于 9452，index= 3
        let length = this.themeTopYs.length;
        //在后面增加一个最大值，减少if判断。length-1是因为最后增加的是不需要的，同时也能解决越界
        for (let i = 0; i < length-1; i++) {
          if (this.currentIndex !== i && (i < length - 1 && positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i+1])) {
            this.currentIndex = i; 
            //在DetailNavBar中这是了标题变色
            this.$refs.navbar.currentIndex = this.currentIndex
          }
        }
        //普通
        // for (let i = 0; i < length; i++) {
        //   if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] &&
        //   positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
        //     this.currentIndex = i; 
        //     //在DetailNavBar中这是了标题变色
        //     this.$refs.navbar.currentIndex = this.currentIndex
        //   }
        // }

          //3.是否显示/隐藏BackTop。 position是子组件传过来的信息
          this.isShowBackTop = (-position.y) > 1000 //当滚动位置大于1000显示BackTop
          //决定tabControl是否吸顶（position：fixed）
          this.isTabFixed = (-position.y) > this.tabOffSetTop 
      },
      addToCart(){
        // 1.获取购物车需要展示的信息
        const product = {}
        product.image =  this.topImages[0];
        product.title =  this.goods.title;
        product.desc =  this.goods.desc;
        product.price =  this.goods.realPrice;
        product.iid = this.iid; //必须要传id过去，因为id的唯一的标识


        //2.添加商品单购物车
        this.add(product).then(res => { //采用映射方法

          // 3.点击购物车显示弹窗
          // this.Dshow = true;
          // this.Dmessage = res;
          // setTimeout(() => {
          //   this.Dshow = false;
          //   this.Dmessage = res;
          // },1500)
          // console.log(res);
          console.log(res);


        })
        // this.$store.commit('addCart',product)
        // this.$store.dispatch('addCart',product).then(res =>{ //普通的直接调用
        //   console.log(res);
        // })
        // console.log(product);

      } 
      
  },
  created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
          const data = res.result;
          //1.获取轮播图数据
          this.topImages = data.itemInfo.topImages
          //2.获取商品数据
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
          //3.创建店铺信息的对象
          this.shops = new Shop(data.shopInfo)
          //4.保存商品的详情数据
          this.detailinfo = data.detailInfo
          //5.获取参数信息
          this.paraminfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
          //6.取出评论信息
          if (data.rate.cRate !== 0) {
          this.commentInfo =  data.rate.list[0]           
          }
        // console.log(data);
      })
      //请求推荐数据
      getRecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list
      })

      // created不行是压根不能获取元素  mounted不行是数据还没有获取到
      // 第一次获取，值不对
      // 原因：this.$refs.param.$el压根没有
      //   this.themeTopYs= []

      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommed.$el.offsetTop);
      //   console.log(this.themeTopYs);


      // 第二次获取：值不对
      // 原因：图片没有计算在类
      // 根据最新的数据，对应的DOM是已经被渲染出来
      // 但是图片依然是没有加载完（目前获取到的offsetTop不包含其中的图片）
      // offsetTop值不对的时候，都是因为图片的问题
      // this.$nextTick(() => {
      //   // this.themeYopYs.push(参数的offsetTop);
      //   // this.themeYopYs.push(参数的offsetTop);
      //   // this.themeYopYs.push(评论的offsetTop);
      //   // this.themeYopYs.push(推荐的offsetTop);
      //   this.themeTopYs= []

      //   this.themeTopYs.push(0);
      //   this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      //   this.themeTopYs.push(this.$refs.recommed.$el.offsetTop);
      //   console.log(this.themeTopYs);
      // })
      
  },
  mounted() {
  //   //1.监听GoodsListItem中的图片是否加载完成
  //   const refresh =  debounce(this.$refs.detailscroll.refresh)//防抖
  //   // this.debounce(this.$refs.scroll.refresh) 是debounce函数的func,还可以自行设置延迟的时间(this.$refs.scroll.refresh，时间)
    
  //   // 对监听事件的保存
  //   this.itemImgListener = () => {
  //      refresh()//图片一加载完成就刷新
  //   }
  //   emitter.on('itemImageLoad', this.itemImgListener)
  // },
  // unmounted(){//unmounted是“销毁”的意思，当我们离开这个页面的时候，便会调用这个函数 
  //   emitter.off('itemImageLoad', this.itemImgListener) //取消监听itemImageLoad事件



  }
 }
</script>

<style scoped>
/* 将main-tab-bar盖掉 */
#detail{
  height:100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-nav{
  position: relative;
  z-index: 9;
}
.content{
  height: calc(100% - 93px);
  overflow: hidden;
}

</style>