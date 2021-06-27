<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles"
       :class="{active: index === currentIndex}"
       class="tab-control-item" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
 </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
      titles: {
        type:Array,
        default(){
            return [];
        }
        }
  },
  data() { 
    return {
        currentIndex: 0
    }
  },
  components:{
  },
  methods:{
      itemClick(index){
          this.currentIndex = index;
          this.$emit('tabClick',index)//子组件回传信息给父组件用$emit
      }
  },
  mounted() {

  },
 }
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    /* 这里的height最好不要省略，因为如果没有文字填充，就不会显示 */
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
}

/* tab-control-item的东西平分空间 */
.tab-control-item {
    flex: 1;
}
.active{
    color:var(--color-high-text);

}
/* .tab-control-item span 四周都扩大5px */
.tab-control-item span {
    padding: 8px;
}
/* 在span标签下面加横线 */
.active span {
    border-bottom: 3px solid var(--color-high-text);
}
</style>