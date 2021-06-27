<template>
  <div>
      <nav-bar>
        <template v-slot:left>
            <div class="titleback" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
        </template>
        <template v-slot:center >
            <div class="title">
                <div v-for="(item,index) in titles" 
                class="title-item"
                :class="{active: index === currentIndex}"
                @click="titleClick(index)">{{item}}</div>
            </div>
        </template>
      </nav-bar>
 </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',
  data() { 
    return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0,
    }
  },
  components:{
    NavBar
  },
  methods:{
      titleClick(index){
          this.currentIndex = index;
          this.$emit('titleClick',index);
      },
      backClick(){ //监听返回
        //   this.$router.back();
          this.$router.go(-1)
      }
  },
  mounted() {

  },
 }
</script>

<style scoped>
.title{
    display: flex;
    font-size: 16px;
}
.title-item{
    flex: 1;


}
.active{
    color:var(--color-high-text)
}
.titleback{
    height: 44px;
}
.titleback img{
    margin-top:10px; 
}
</style>