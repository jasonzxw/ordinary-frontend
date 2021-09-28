var Dep = function Dep(){
    this.deps = {}
}

//添加订阅
Dep.prototype.on = function(type,fn){
    !this.deps[type]? (this.deps[type]=[]).push(fn):this.deps[type].push(fn)
}

//发布
Dep.prototype.emit = function(){
    var type = [].shift.call(arguments);
    if(this.deps[type]){
        this.deps[type].forEach(event => {
            event.apply(this,arguments)
        });
    }
}

//取消事件
Dep.prototype.off = function(type,fn){
    if(this.deps[type]){
        var index = this.deps[type].indexOf(fn)
        if(index>-1){
            this.deps[type].splice(index,1)
        }
    }
}

var dep = new Dep() ;

function sub1(content){
    console.log('1接收发布',content)
}

function sub2(){
    console.log('2接受发布')
}

function sub3(){
    console.log('3接受发布')
}

dep.on('buy',sub1)

dep.on('buy',sub2)

dep.on('buy1',sub3)

dep.emit('buy',"hello world")