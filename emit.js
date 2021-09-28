var deps = {}

//订阅
deps.on = function(type,fn){
  !deps[type]?(deps[type]=[]).push(fn):deps[type].push(fn)
}

//发布消息
deps.emit = function(){
    var type = [].shift.call(arguments)
    if(deps[type]){
        deps[type].forEach(fn => {
            fn.apply(this,arguments)
        });
    }
}
//取消订阅
deps.off = function(type,fn){
    if(deps[type]){
        var index= deps[type].indexOf(fn)
        if(index>-1){
            deps[type].splice(index,1)
        }
    }
}
function sub1(content){
    console.log('1接收发布',content)
}

function sub2(){
    console.log('2接受发布')
}

function sub3(){
    console.log('3接受发布')
}

// deps.on('book',sub1)

// deps.on('book',sub2)

// deps.on('book1',sub3)

// deps.off('book',sub2)

// deps.emit('book','开心吗')




function green(){
    console.log(`green`)
};

function yellow(){
    console.log(`yellow`)
}

function red(){
    console.log(`red`)
}

// function start(cb,timer){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             cb();
//             resolve();
//         }, timer);
//     })
// }

// function step(){
//      Promise.resolve().then(
//         function(){
//             return start(red,3000)
//         }
//     ).then(
//         function(){
//             return start(yellow,2000)
//         }
//     ).then(
//         function(){
//             return start(green,1000)
//         }
//     ).then(
//         function(){
//            step()
//         }
//     )
// }

// step()



// function subArray(array){
//     var sub = [] ;
//     var length = array.length
//     if(!array) return sub;
//     if(array.length<2)return sub.push(array.join(','));
//     sub.push(array.join(''));
//     sub.push(array.slice(0,length-1).join(''))
//     sub.push(array.slice(1).join(''));
//     //最后一位出数组
//     if(array.length>2){
//         //取当前最长及次长
//         array.pop();
//     }else{
//         return sub
//     }
//     return sub.concat(subArray(array))
    
// }

// console.log(`结果为`)
// console.log([...new Set(subArray([1,2,3,4,5]))])


function getCount(array){
    var obj ={};
    for(var  i=0;i<array.length;i++){
        if(obj[array[i]]){
            obj[array[i]]++
        }else{
            obj[array[i]]=1
        }
    }
    Object.keys(obj).forEach(key=>{
        if(obj[key]>1){
            obj[key]=true;
        }else{
            obj[key]= false;
        }
    })
    return  obj;
}

getCount(['a','b','c','d','e','a'])
