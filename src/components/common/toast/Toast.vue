<template>
  <!-- <div class="tosat" v-show="show"> -->
    <p>dflgdfkgh</p>
        <div>{{message}}</div>
</template>

<script>
import { useToast  } from 'components/common/toast/toast';
export default {
  name: 'Toast',
  props: {
    //   message:{
    //       type:String,
    //       return: ''
    //   },
    //   show:{
    //       type:Boolean,
    //       return: false,
    //   }
  },
    setup() {
        const Toast = useToast(); // 所有的子组件都要从useToast拿到toast方法
        console.log(Toast);
        let message = Toast('Hello World');
        // console.log(Toast('Hello World'));
        console.log(message);

        return{
          message
        }
    },
  data() { 
    return {
    //     showMessage: '',
    //     isShow: false
    }
  },
  components:{
  },
  methods:{
      // show(message,duration=1500){ //默认时间是1.5秒
      //     this.showMessage = message
      //     this.isShow = true

      //     setTimeout(() => {
      //         isShow = false,
      //         showMessage= '' //清除传入的文字
      //     },duration)
      // }
  },
  mounted() {

  },
 }
</script>

<style scoped>
/* // .tosat {
//     样式居中
//     position:fixed;
//     top:50%;
//     left:50%;
//     transform:translate(-50%,-50%);

//     z-index: 999;
//     padding:8px 10px;
//     color: #fff;
//     background-color: rgba(0, 0, 0, 0.5);
// } */
</style>    