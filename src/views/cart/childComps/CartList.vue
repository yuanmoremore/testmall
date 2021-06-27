<template>
    <div class="cart-list">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem.vue'


export default {
  name: 'CartList',
  data() { 
    return {

    }
  },
  components:{
    CartListItem

  },
  methods:{

  },
  computed: {
    ...mapGetters(['cartList']) //想要用Getters的什么属性就加进来，比如cartLength
  },
  mounted() {

  },
 }
</script>

<style scoped>

</style>