import {ADD_COUNT,ADD_TO_CART} from './mutations-types'

export default {
    //mutations唯一的目的就是修改state中的状态
    //mutations中的每一个方法尽可能完成的事件比较单一一点，不然有时候追踪时就不好分辨哪个是哪个
    [ADD_COUNT](state,payload){
      payload.count++
    },
    [ADD_TO_CART](state,payload){
      payload.check = true //添加进购物车就是选中状态
      state.cartList.push(payload)
    }

    // addCart(state,payload){
      //判断购物车里面有没有新添加的商品，有就在原来数量上加一，没有就创建
      //第一种方式
      // //1.payload是新添加的商品
      // let oldProducts = null; //oldProducts购物车里面的商品
      // for(let item of state.cartList){ 
      //   if (item.iid === payload.iid) { //如果新添加的商品原本就在购物车，那就将item赋给oldProducts，oldProducts状态就会改变，不再为null
      //     oldProducts = item;
      //   }
      // }
      // //2.判断oldProducts是否为空
      // if (oldProducts) { //不为空，直接数量加一
      //   oldProducts.count +=1; 
      // } else {//为空加新建
      //   payload.count =1; //新添加的商品数量为1
      //   state.cartList.push(payload)
      // }
      //第二种方式
    //   //1.查找之前数组是否有该商品
    //   let oldProducts = state.cartList.find(item => item.iid === payload.iid)
    //   //2.判断oldProducts是否为空
    //   if (oldProducts) {
    //     oldProducts.count +=1; //不为空，直接数量加一
    //   }else{
    //     payload.count = 1;  //新添加的商品数量为1
    //     state.cartList.push(payload)
    //   }
    // }
  }