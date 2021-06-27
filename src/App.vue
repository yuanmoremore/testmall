<template>
  <div id="app">
      <router-view v-slot="{ Component }">
          <transition name="router-fade" mode="out-in">
              <keep-alive exclude="Detail">
                  <component :is="Component"/>
              </keep-alive>
          </transition>
      </router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from './components/content/mainTabBar/mainTabBar.vue'

export default {
  name:'app',
  components:{
    MainTabBar
  },    
}
</script>
<style>
  @import "assets/css/base.css"
</style>
