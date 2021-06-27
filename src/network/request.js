import axios from 'axios'

export function request(config){
    //创建axios实例
    const instance = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })

    //axios的拦截器
    //请求拦截
    instance.interceptors.request.use(config => { //请求拦截
        // console.log(config);  //请求成功
        // 请求拦截用途
        // 1.比如config中的一些信息不符合服务器要求
        // 2.比如每次发送网络请求时，都希望在界面中显示一个请求图标
        // 3.某些网络请求（比如登录（LokeN），必须携带一些特殊的信息
        return config  //如果拦截成功，config就不会传过去，所以还需要重新释放config
    },err => {
        // console.log(err); //请求失败
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res); //这里不需要
        return res.data //如果拦截成功，res就不会传过去，所以还需要重新释放res
    },error => {
        console.log(error);
    })

    //发送真正的网络请求
    return instance(config)
    
}
