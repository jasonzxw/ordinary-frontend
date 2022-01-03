// 1. 实现Object.create
/**
 * 
 * @param {传入原型继承的对象} obj 
 * @returns 
 */
function _create(obj){
    function F(){}
    // 原型指向传入对象
    F.prototype = obj
    return new F() 
}

// 2. 手写 instanceOf
/**
 * 
 * @param {原型链上的构造函数} val 
 * @param {实例} obj 
 * @returns 
 */
function _instanceOf(val,obj){
    // 获取传入实例的原型
    var proto = val.__proto__ || Object.getPrototypeOf(val)
    var result
    while(proto !== null){
        // 原型的构造函数与传入参数是否一致
        result = proto.constructor === obj
        if(result){
            return result
        }
        proto = proto.__proto__
    }
    return result
}

// 3. 手写new
/**
 * 
 * @param {实例函数} func 
 * @param {实例函数参数} args 
 */
function _new(func,args){
    // 参数类数组转数组
    var params = [].slice.call(arguments)
    // 获得构造函数
    var constructor = params.shift()
    // 以构造函数的原型为原型生成实例
    var obj = Object.create(constructor.prototype)
    // 执行构造函数
    var result = constructor.apply(obj,params)
    return typeof result === 'object' && result !=null ? result : obj ;
}

// 4. 手写防抖debounce

/**
 * 
 * @param {回调函数} cb 
 * @param {等待时间} wait 
 * @returns 触发完事件 n 秒内不再触发事件，我才执行
 */
function _debounce(cb,wait){
    var timer,context,args;
    return function(){
        // this指向问题:运行环境,通常是某个元素节点
        context = this ;
        // 传入参数
        args = arguments ;
        clearTimeout(timer)
        timer = setTimeout(() => {
                cb.apply(context,args)
        }, wait);
        
    }
}

// 6. 手写节流
/**
 * 
 * @param {回调函数} cb 
 * @param {触发时间间隔} wait 
 * @returns 持续触发事件，每隔一段时间，只执行一次事件
 */
function _throttle(cb,wait){
    var context,args;
    // 设置起始时间戳
    var previous = 0 ;
    return function () {
        context = this ;
        args = arguments ;
        // 日期转换为数字
        var now = +new Date();
        //大于等待时间执行并且更新时间戳
        if(now-previous>wait){
            cb.apply(context,args);
            previous = now ;
        }
    }
}

// 7. 手写call
/**
 * 
 * @param {执行环境} context 
 * @param {执行参数} args 
 * @returns 
 */
Function.prototype._call = function(context,args) {
    // 获取执行环境
    var obj = context || window ;
    // 将执行函数放入环境中,类似于类实例新增一个方法
    obj.cb = this ;
    // 执行方法
    var result = obj.cb(...args) ;
    // 删除方法,以免造成内存泄漏
    delete obj.this ;
    return result 
}

// 8. 手写bind
Function.prototype._bind = function(cb,...args){
    var context = cb || window ;
    var that = this ;
    return function(){
        var args = [].concat(args,arguments);
        var result = that.call(context,...args);
        delete context.fn ;
        return result ;

    }
}