// add whatever parameters you deem necessary

//We want to see if two different integers contain the same values. Doesn't have to be in same order!

//Tools:
/*
- Frequency counter: We'll use a helper funciton to create objects for each individual integers to keep track of unique numbers and how many times they appear
- Note: Integers aren't iterable so we must error handle gracefully!
*/

function sameFrequencyHelper ( integer ) {
    let integerObj = {};
    let iterableInt = `${integer}`
    for(let number of iterableInt ) {
        console.log(number)
        integerObj[number] = integerObj[number] + 1 || 1
    }
    return integerObj
};

function sameFrequency(int1, int2) {
    const INT1_OBJ = sameFrequencyHelper(int1);
    const INT2_OBJ = sameFrequencyHelper(int2);
    for(let int in INT1_OBJ) {
        if(!INT2_OBJ[int]) return false;
        if(INT1_OBJ[int] !== INT2_OBJ[int]) return false;
    };
    return true;
};
