import {ADD_COUNT,ADD_TO_CART} from './mutations-types'

export default{
    //1.查找之前数组是否有该商品
    addCart(context,payload){      
      return new Promise((resolve,reject) => {
        let oldProducts = context.state.cartList.find(item => item.iid === payload.iid)
        //2.判断oldProducts是否为空
        if (oldProducts) {
          // oldProducts.count +=1; //不为空，直接数量加一
          context.commit(ADD_COUNT,oldProducts)
          resolve('商品数量+1')
        }else{
          payload.count = 1;  //新添加的商品数量为1
          // context.state.cartList.push(payload)
          context.commit(ADD_TO_CART,payload)
          resolve('添加到购物车')
        }
      })
      }
      
}