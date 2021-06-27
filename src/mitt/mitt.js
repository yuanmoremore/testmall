
import mitt from "mitt";

export const emitter = mitt()

// 在Vue中可以使用 emitter 来作为沟通桥梁，就像是所有组件共用相同的事件中心，可以向该中心注册发送事件或接收事件，
// 所以组件都可以上下平行地通知其他组件
// mitt事件总线用法：
// 1.安装mitt：npm install --save mitt
// 2.封装一个js(就是这里这个js)，并且导出
// 3.哪些组件之间需要通信就导入这个js。（不管哪些组件之间都可以通信，父子组件，祖孙组件，叔侄组件都可以）
// 例:
// GoodsListItem这个组件需要传信息出去，就先导入import {emitter} from '../../../mitt/mitt.js'，然后再使用emitter.emit('事件名称'，函数)发送事件内容
// home这个组件需要接收信息，就先导入import {emitter} from '../../../mitt/mitt.js'，然后再使用emitter.on('事件名称'，函数)接收