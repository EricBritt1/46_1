// add whatever parameters you deem necessary
function countPairs(arr, val) {
    const seen = {}; 
    let pairs = 0;

    for (let num of arr) {
        const complement = val - num;
        if (seen[complement]) {
            pairs++;
            seen[complement]--; 
        } else {
            seen[num] = (seen[num] || 0) + 1; 
        }
    }

    return pairs;
}


