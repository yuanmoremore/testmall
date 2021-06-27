import {request} from './request';

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

//请求流行新款精选的数据，函数需要传参数，
export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}

// 函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
// 函数调用结束 -> 弹出函数栈(释放函数所有的变量)
// function test() {
//   const names = ['why', 'aaa']
// }
//
// test()
//
// test()

//多个home请求就设置多个
// export function getHomeMultidata(){
//     return request({
//         url:'/home/multidata'
//     })
// }