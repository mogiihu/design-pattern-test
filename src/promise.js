Array.prototype._reduce = function(fn, initValue=0) {
    let arr = this;
    let resultArr = [];
    for(let i=0;i<arr.length;i++) {

        let accumulator = i==0? initValue : resultArr[i-1];
        resultArr.push(fn(accumulator, arr[i]))
    }
    return resultArr[arr.length-1];
}
