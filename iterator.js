class Counter {
    constructor(limit){
        this.limit = limit ;
    }
    [Symbol.iterator](){
        let count = 1 ,
        limit = this.limit ;
        return{
            next(){
                if(count<=limit){
                    return {done:false,value:count++}
                }
                else{
                    return {done:true,value:undefined}
                }
            }
        }
    }
}

let count = new Counter(3)

for(let item of count){
    console.log(item)
}

console.log(count[Symbol.iterator])
console.log(count[Symbol.iterator]().next())

var bubble = function(list){
    var length = list.length;
    if(length<2)return list;
    //比较轮数
    for(var i=0;i<length-1;i++){
        //相邻比较
        for(var j=0;j<length-i-1;j++){
            if(list[j]>list[j+1]){
                [list[j],list[j+1]]  = [list[j+1],list[j]]
            }
        }
    }
    return list
}

var quickSort = function(list){
    if(list.length<=1)return list ;
    var middle = Math.floor(list.length/2);
    var left = [] ;
    var pivot = list.splice(middle,1)[0];
    var right = [] ;
    for(var i=0;i<list.length;i++){
        if(list[i]<pivot){
            left.push(list[i])
        }else{
            right.push(list[i])
        }
    }
    return quickSort(left).concat([pivot],quickSort(right))
}
