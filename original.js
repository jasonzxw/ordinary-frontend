/*
 * @Author: jasonz
 * @Date: 2021-01-05 13:39:27
 * @Last Modified by: jasonz
 * @Last Modified time: 2021-03-09 16:19:08
 */

const { Exception } = require("handlebars");

var _toString = Object.prototype.toString;


function isArray(val){
    return _toString.call(val) === '[object,Array]'
}

// create object
function New(){
    var obj = new Object()
    var constructor = [].shift.call(arguments)
    obj.__proto__ = constructor.prototype
    var ret = constructor.apply(obj,arguments)
    return typeof ret === 'object' ? ret : obj
  }

//call 
  Function.prototype.callDemo = function(context){
    context = context || window 
    context.fn = this
    context.fn()
    delete context.fn
  }


//apply
Function.prototype.applyDemo = function(context){
    var arg =this 
    return function(){
        return arg.apply(context)
    }
}

//create iterator
function createIterator(val){
    let i =0 ;
    if(isArray(val)){
        return {
            next : function(){
                let done = i >= val.length
                let value = !done ? val[i++] : undefined
                return {
                    value,done
                }
            }
        }
    }
    else{
        throw Exception('传入的不是数组')
    }
}
  

// red green yellow

function red(){
    console.log('red')
}

function green(){
    console.log('green')
}

function yellow(){
    console.log('yellow')
}

let light = function(time , func){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            func(),
            resolve()
        }, time);
    })
}

let step = function(){
    Promise.resolve().then(
        function(){
            return light(3000,red)
        }
    ).then(
        function(){
            return light(2000,green)
        }
    ).then(
        function(){
            return light(1000,yellow)
        }
    ).then(
        function(){
            step()
        }
    )
}


function isPromise(obj) {
    return 'function' == typeof obj.then;
}

//asnc auto run 
function run(gen){
    // get iterator
    var gen = gen()
    function next(data) {
        var result = gen.next(data);
        if (result.done) return;

        if (isPromise(result.value)) {
            result.value.then(function(data) {
                next(data);
            });
        } else {
            result.value(next)
        }
    }
    next()
}





//vue data-bind  (observer wacher compile)
function defineReactive(obj,key,val){

    observe(obj)
    Object.defineProperty(obj,key,{
        enumerable : true ,
        configurable : true ,
        get: function() {

            //添加watcher
            if (Dep.target) {
                dep.addSub(Dep.target);
            }
            
            return val
        },
        set :function(newVal){
            val = newVal
        }
    })
} 

function observe(data){

    if(!data || _toString(data) !=='[object Object]'){
        return
    }

    data.keys(
        item => defineReactive(data,key,obj[key])
    )
}

//订阅器
function Dep(){

    this.subs = []
}

Dep.prototype.addSub = function(sub){this.subs.push(sub)}

Dep.prototype.removeSub = function(sub){
    if(this.subs.length){
        let index = this.subs.indexOf(sub)
        if( index>-1){
            this.subs.splice(index,1)
        }
    }
}

Dep.prototype.notify = function(){this.subs.forEach(sub => sub.update())}


//watcher

function Watcher(vm,exp,cb){

    this.vm = vm ,
    this.exp = exp ,
    this.cb= cb ,
    this.value = this.get()
}

Watcher.prototype.update = function(){this.run()}
Watcher.prototype.run = function(){

    var value = this.vm.data[this.exp];
    var oldVal = this.value;
    if (value !== oldVal) {
        this.value = value;
        this.cb.call(this.vm, value, oldVal);
    }
}
Watcher.prototype.get = function(){
    // 缓存自己
    Dep.target = this;
    // 强制执行监听器里的get函数
    var value = this.vm.data[this.exp]
    // 释放自己
    Dep.target = null;
    return value;
}


//防抖

function debounce(func,timer){
    var timeId;
    return function(){
        var context = this
        //绑定时间对象
        var args = arguments
        clearTimeout(timeId)
        timeId = setTimeout(function(){
            //bind element
            func.apply(contxt,args)
        }, timer);
    }
}


function instance(val,obj){
    var proto = val.__proto__
    var result
    while(proto !== null){
        result = proto.constructor === obj
        if(result){
            return result
        }
        proto = proto.__proto__
    }
    return result
}


  /**
   * shallow copy
   */
   function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  Object.assign(target,source)

  /**
   * deep copy
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }
