// add whatever parameters you deem necessary
function constructNoteHelper ( str ) {
    const freqObj = {};
    for(let char of str) {
        freqObj[char] = freqObj[char] + 1 || 1
    }
    return freqObj
};



function constructNote(message, str) {
    const messageObj = constructNoteHelper(message);
    const givenStrObj = constructNoteHelper(str);
    console.log(messageObj)
    console.log(givenStrObj)
    if(str.length === 0) return false;
    if(message.length === 0) return true;
    for(let char in messageObj) {
        if(!givenStrObj[char]) return false;
        if(messageObj[char] > givenStrObj[char]) return false;
    } 
    return true;
}

