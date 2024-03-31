// add whatever parameters you deem necessary
// The array will be sorted

function averagePair(arr, targetAverage) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while(leftPointer < rightPointer) {
        let currAvg = (arr[leftPointer] + arr[rightPointer])/2
        console.log(currAvg)
        if(currAvg < targetAverage) {
            leftPointer += 1
        }
        if(currAvg > targetAverage) {
            rightPointer -= 1
        }
        if(currAvg === targetAverage) return true
    }

    return false
}
