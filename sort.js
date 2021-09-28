let bubbleSort = function(array){
    let _toString = Object.prototype.toString
    if(_toString.call(array) !=='[object Array]'){
        throw new Error('this is not Array')
    }
    if(!array.every(item=>typeof item === 'number')){
        throw new Error('Array contains not number')
    }
    let length = array.length
    if([...new Set(array)].length<length){
        throw new Error('Array contains repeat number')
    }
    for(let i=0;i<length;i++){
        let temp = array[i]
        for(let j=i+1;j<length;j++){
            if(temp>array[j]){
                [array[i],array[j]] = [array[j],array[i]]
            }
            else{
                temp = array[j]
            }
        }
    }
    return array
}

let quickSort = function(array){
    if (array.length <= 1) { return array; }
    let middle = Math.floor(array.length/2)
    let left = []
    let right = []
    let pivot = array.splice(middle,1)[0]
    for(let i=0;i<array.length;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }
        else{
            right.push(array[i])
        }
    }
    return quickSort(left).concat([pivot],quickSort(right))
}