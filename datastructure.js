
//冒泡排序 
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

//快速排序(主要是去中间值,小于中间值放做左边,大于中间值的放右边,接着递归左右两边)
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

