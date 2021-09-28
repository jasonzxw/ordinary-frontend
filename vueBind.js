//数据劫持
function Observe(obj){

    if(typeof obj === Object){
        obj.keys.forEach(key => {
            dereactive(obj,key,obj[key])
        });
    }
    else{
        return ;
    }
}

function dereactive(obj,key,val){
    Observe(val)
    var dep = new Dep()
    Object.defineProperty(obj,key,{
        configurable:true,
        enumerable: true,
        get(){
            //收集订阅
            if(Dep.target){
                dep.add(Dep.target)
            }
        },
        set(newVal){
            if(val !== newVal){
                val = newVal
                //发布订阅
                dep.notify()
            }
           
        }
    })
}

function Dep(){
    //收集需要依赖
    this.subs =[]
}

Dep.target = null

Dep.prototype.add = function(watcher){
    this.subs.push(watcher)
}
Dep.prototype.notify = function(){
    //更新
    this.subs.forEach(
        sub => sub.update()
    )
}


function Watcher(vm,exp,cb){
    //vm vue实例 ，exp 为key , cb渲染
    this.vm = vm ,
    this.exp = exp ,
    this.cb = cb ,
    this.value = this.get()
}

Watcher.prototype.update = function(){
    this.run()
}

Watcher.prototype.run = function(){
    var value = this.vm.data[this.exp] ;
    var oldValue = this.value ;
    if(value !== oldValue){
        this.value = value
        this.cb.call(this.vm,value,oldValue)
    }
}

Watcher.prototype.get = function(){
    Dep.target = this ;
    var value = this.vm.data[this.exp]
    Dep.target = null ;
    return value
}

function Vue(options){

    this.data = options.data ;
    this.el = options.el ;
    this.exp = options.exp ;
    Observe(data)
    new Watcher(this,exp,render)

}