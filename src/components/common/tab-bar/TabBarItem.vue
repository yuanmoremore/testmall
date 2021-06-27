<template>
        <div class="tab-bar-item" @click="itemClick">
            <!-- <slot v-if="!isActive" name="item-icon">
            <slot v-else name="item-ic  on-item">   上面可以，下面也可以-->
            <div v-if="!isActive"><slot name="item-icon"></slot></div>
            <div v-else><slot name="item-icon-item"></slot></div>
            <!-- <slot :class="{active:isActive}" name="item-text"> 因为插槽会将<slot></slot>里面的内容完全替换，所以class在浏览器不会被显示出来  -->
            <div :style="activeStyle"><slot name="item-text"></slot></div>
        </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{ 
        link:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:true,
        }
    },
    computed:{
        isActive(){
            //解决图标和字体颜色问题：总的思路是判断当前页面的路径和出于活跃路由的路劲是否一致
            return this.$route.path.indexOf(this.link) !== -1
            // return this.$route.path == this.link
        },
        activeStyle(){
            return this.isActive ? {color : this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.link).catch(() => {})
        }
    }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align:center;
  height: 49px;
  font-size:12px;
}

.tab-bar-item img{
    width:23px;
    height:23px;
    margin-top: 3px;
    vertical-align:middle;
    margin-bottom: 2px;
}

/* .active{
  color:red;
  } */
</style>

