/*
 * 此js为模拟实现mvvm
 * @Author: jasonz
 * @Date: 2021-01-27 09:04:34
 * @Last Modified by: jasonz
 * @Last Modified time: 2021-02-01 17:20:55
 */
Dep.target = null ;

function observe(obj) {
    if(!obj || Object.prototype.toString.call(obj) !== '[object,Object]'){
        return 
    }
    obj.keys(
        key => reactive(obj,key,obj[key])
    )
}

function reactive(obj,key,val){
    observe(val)
    var dep = new Dep()
    Object.defineProperty(obj,key,{
        enumerable: true,
        configurable: true ,
        get(){
            if(Dep.target){
                dep.add(Dep.target)
            }
            return val
        },
        set(newVal){
            if(val ===newVal){
               return ;
            }
            val = newVal
            dep.notify()

        }

    })
}

function Dep(){
    this.subs = [] ;
}

Dep.prototype.add = function(sub){
    this.subs.push(sub)
}

Dep.prototype.notify = function(){
    this.subs.forEach(sub => {
        sub.update()
    });
}

function Watcher(options,key){
    this.data = options.data
    this.ele = options.ele
    this.key = key
    this.value = this.get()

}

Watcher.prototype.run = function(){
    var value = this.data[this.key]
    var oldVal = this.value
    if(oldVal !==value){
        this.value = value
        this.ele.innertext = value?value:''
    }
}

Watcher.prototype.update= function(){
    this.run()
}

Watcher.prototype.get = function(){
    //收集依赖
    Dep.target = this
    var value = this.data[this.key]
    Dep.target = null 
    return value

}


function Compile(options){
    this.options = options
    this.el = options.el
    this.data = options.data
    this.getTemplate()
}

//模板解析
Compile.prototype.getTemplate = function(){
    var childNodes = this.ele.childNodes ;
    var that =this ;
    [].slice.call(childNodes).forEach(
        function(node){
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent;
            if(node.nodeType = Node.TEXT_NODE && reg.test(text)){
                that.compileText(node,reg.exec(text)[1])
            }
            if(node.childNodes && node.childNodes.length){
                //遍历
                that.getTemplate(node)
            }
        }
    )
}

Compile.prototype.compileText = function(node,key){
    var val = this.data[key]
    this.update(node,val)
    var that = this
    new Watcher(that.options,key)

}

Compile.prototype.update() = function(node,val){
    node.textContent = val?val:''
}


function Vue (options){
    this.ele = el
    this.data = options.data
    observe(data)
    new Compile(options)
}