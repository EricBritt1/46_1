// add whatever parameters you deem necessary
//I want to create a function that accepts two arrays, one being keys and the other being values, and pair them up in order. If the amount of keys are more than values then let the remaining values for the keys be null.
/*
    Ex:
        ['a', 'b', 'c', 'd']  [1, 2, 3]

        {'a': 1, 'b' : 2, 'c' : 3, 'd' : null}

        or

        ['a'] [1, 2]
        {'a': 1}
*/
/*
    Tools in our box:
    Multiple pointers: Kind of useless here since we have two arrays

    Frequency Counter: Pretty useless as well. I don't see a purpose for counting the frequency of values

    While there are keys, we should match them with values. 
    If there isn't values but, still keys assign null
    If there are enough keys but, not enough values stop at the end of keys.

*/

function twoArrayObject(keys, values) {
    const keysArrLength = keys.length;
    let keysPointer = 0;
    let keyValPairObj = {};

    while(keysPointer < keysArrLength) {
        if(values[keysPointer]) {
            keyValPairObj[keys[keysPointer]] = values[keysPointer]
            keysPointer += 1
        } else {
        keyValPairObj[keys[keysPointer]] = null
        keysPointer += 1
        }
    }
    return keyValPairObj
}
