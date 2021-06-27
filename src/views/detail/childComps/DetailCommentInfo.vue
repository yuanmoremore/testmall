<template>
      <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
          <div class="info-header">
              <div class="header-title">用户评价</div>
              <div class="header-more">
                  更多
                  <i class="arrow-right"></i> 
              </div>
          </div>
          <div class="info-user">
              <img :src="commentInfo.user.avatar" alt="">
              <span>{{commentInfo.user.uname}}</span>
          </div>
          <div class="info-detail">
              <p>{{commentInfo.content}}</p>
              <div class="info-other">
                  <span class="data">{{showData}}</span>
                  <span>{{commentInfo.style}}</span>
              </div>
              <div class="info-img">
                  <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
              </div>
          </div>
      </div>
</template>

<script>
import {formatDate} from '../../../common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
      commentInfo: {
          type: Object,
          default(){
              return {}; 
          }
      }
  },
  data() { 
    return {

    }
  },
  components:{
  },
  computed: {
    //   将时间戳转成时间格式化字符串
    //   时间戳：created: 1531888968 (单位是秒)
    //     1.将时间戳转成Date对象
    //     const date = new Date(1531888968*1000); （单位是毫秒）
    //     2.将date进行格式化，转成对应的字符串
    //         *data.getYear() + data.month() +1
    //     data -> FormatString
    //     fmt.format(data,'yyyy-MM-dd hh:mm:ss') 
    //     'yyyy-MM-dd hh:mm:ss' 对应年月日 时分秒 h表示12小时制，H表示24小时制
    showData(){
        //     1.将时间戳转成Data对象
        const date = new Date(this.commentInfo.created * 1000)
        //     2.将data进行格式化，转成对应的字符串
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  },
  methods:{

  },
  mounted() {

  },
 }
</script>

<style scoped>
.comment-info{
    padding:5px 12px;
    color:#333;
    border-bottom: 5px solid #f2f5f8;
}
.info-header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.header-title{
    float: left;
    font-size: 15px;
}
.header-more{
    float: right;
    margin-right: 10px;
    font-size: 15px;
}
.info-user{
    padding:10px 0 5px;
}
.info-user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.info-user span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
}
.info-detail p{
    font-size: 14px;
    color:#777;
    line-height: 1.5;
}
.info-detail .info-other{
    font-size: 12px;
    color:#999;
    margin-top: 10px;
}
.info-other .data{
    margin-right: 8px;
}
.info-img{
    margin-top: 10px;
}
.info-img img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
}
</style>