export function debounce(func,delay){//防抖
    let timer = null;
    return function(...args){
      if(timer) clearTimeout(timer);//消除上一次的timer
      timer = setTimeout(() => {
        func.apply(this,args)
      },delay)
    }
  }

export function formatDate(date, fmt) { //时间戳转成字符串
    if (/(y+)/.test(fmt)) { //获取年份
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {//
      // 在正则表达式中，+ 表示重复一个或者多个 y+表示重复一个或者多个y y*表示重复0个或者多个y y?表示重复0个或者一个y
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  };
  
  function padLeftZero (str) {
    return ('00' + str).substr(str.length);
  };