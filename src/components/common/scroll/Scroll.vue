<template>
    <!-- 在vue中可以通过ref明确拿到某个元素 -->
    <!-- ref如果是绑定在组件中的，那么通过 this.$refs.名称 获取到的是一个组件对象 -->
    <!-- ref如果是绑定在普通的元素中的，那么通过 this.$refs.名称 获取到的是一个元素对象 -->
  <div class="wrapper" ref="wrapper">
      <div class="centent">
          <slot></slot>
      </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props: {
      probeType:{
          type:Number,
          default:0 //默认是0
      },
      pullupload:{
          type:Boolean,
          default:false,
      }
  },
  data() { 
    return {
        scroll:null,
    }
  },
  components:{
  },
  methods:{ 
      scrollTo(x,y,z){//创建返回顶部的方法，xyz可以设置成形参，亦可以直接写死，传默认值
        this.scroll && this.scroll.scrollTo(x,y,z)  //加上一层判断，避免数据还没有请求过来就执行函数，导致浏览器
      },
      finishPullUp(){//可以进行多次上拉加载
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){//解决页面滚动卡顿的问题
        // console.log('---');//验证是否有减少加载次数
        this.scroll && this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }

  },
  mounted() {
    //   1.创建BScroll对象
    //如果有多个div的class也是命名wrapper，通过这种方式就不是很精确
    //   this.scroll = new BScroll(document.querySelector('.wrapper'),{})
    this.scroll = new BScroll(this.$refs.wrapper,{
        disableTouch: false,
        observeDom: true,     
        observeImage: true, //开启对 wrapper 子元素中图片元素的加载的探测。无论图片的加载成功与否，都会自动调用 BetterScroll 的 refresh 方法来重新计算可滚动的宽度或者高度
        pullUpLoad: true,
        click:true,// better-scroll会默认阻止原生的click事件，
        probeType:this.probeType,  //这里的值要通过父组件传过来，不要写死
        pullUpLoad:this.pullupload 
    })
    //2.监听滚动位置
    if (this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position) => {
        // console.log(position);
        //将监听结果(position)发送给父组件，父组件通过scroll事件获取信息(position)，position里面有位置信息X,Y
        this.$emit('scroll',position)  
    })
    }

    // //监听上拉事件
    if (this.pullupload ) {
        this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
    })
    }

  },
 }
</script>

<style>
</style>