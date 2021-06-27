import {request} from "./request"

export function getDetail(iid){//请求展示的数据
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){  //请求推荐的数据
    return request({
        url:'/recommend',
        params:{
            
        }
    })
}


//因为要获取的信息比较分散，创建一个构造器来统一获取数据，封装在一起 
export class Goods{//请求商品的数据
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.realPrice = itemInfo.lowNowPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
    }
}

export class Shop{//请求店铺信息的数据
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}

export class GoodsParam{//请求参数信息的数据
    constructor(info,rule){
        //注：images可能没有某些值（某些商品有值，某些没有）
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}