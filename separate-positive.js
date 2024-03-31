// add whatever parameters you deem necessary
/*
 We want to sort an array in place of positive and negative numbers.
- Positive numbers on left
- Positive numbers on right

Tools: 
- Multiple pointers. 
- Having one pointer starting at beginning of array
- Next pointer will begin +1 from beginning of array
*/
function separatePositive(arr) {
    let currNumPointer = arr.length - 1;
    let searchPointer =  arr.length - 2;
    while(searchPointer >= 0 && currNumPointer > 0) {
        if(arr[currNumPointer] > 0 && arr[searchPointer] < 0) {
            let temp = arr[searchPointer];
            arr[searchPointer] = arr[currNumPointer];
            arr[currNumPointer] = temp;
            currNumPointer -= 1;
            searchPointer -= 1;
        } 
        else if (arr[currNumPointer] < 0 && arr[searchPointer] < 0) {
            currNumPointer -= 1;
        } 
        else {
            searchPointer -= 1;
        }
    }

    return arr;
}


