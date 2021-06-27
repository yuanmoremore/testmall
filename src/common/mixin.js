import {debounce} from './utils'
import {emitter} from '../mitt/mitt.js'
import BackTop from 'components/content/backTop/BackTop.vue';
export const itemListenerMixin = {
    mounted(){
     //1.监听GoodsListItem中的图片是否加载完成
    const refresh =  debounce(this.$refs.scroll.refresh)//防抖
    // this.debounce(this.$refs.scroll.refresh) 是debounce函数的func,还可以自行设置延迟的时间(this.$refs.scroll.refresh，时间)
    
    // 对监听事件的保存
    this.itemImgListener = () => {
       refresh()//图片一加载完成就刷新
    }
    emitter.on('itemImageLoad', this.itemImgListener)
    // console.log('混入内容');
    }

}

export const backTopMixin = {//是否显示返回按钮
    components:{
        BackTop
    },
    data(){
        return{
            isShowBackTop:false,
        }
    },
    methods: {
        backtopclick(){//通过监听点击事件返回顶部
            // this.$refs.scroll 拿到组件对象
            // this.$refs.scroll.scroll  组件对象里面的元素
            //scrollTo(0,0)是具体方法，scrollTo（x,y,z）,0->x,0->y,1000->z(xy是坐标,z是从当前位置返回到顶部的总时间，期间会滚动回顶部)
            //方法一：直接在这里获取
            // this.$refs.scroll.scroll.scrollTo(0,0,1000)
      
            //方法二：通过调用在组件Scroll封装的函数，然后传参数（亦可以在组件Scroll封装的函数设置默认值，如果设置了默认值就不用在这里填参数）
            this.$refs.scroll.scrollTo(0,0,1000)
          },  
    }   
}