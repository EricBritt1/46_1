// add whatever parameters you deem necessary

/*
Tools: Multiple pointers
*/

/*Edge cases:
- If word is longer than phrase word won't be found

- 
*/
function isSubsequence(word, phrase) {
    const LENGTH_OF_PHRASE = phrase.length;
    const LENGTH_OF_WORD = word.length;
    let wordPointer = 0;
    let phrasePointer = 0;

    while(phrasePointer < LENGTH_OF_PHRASE && wordPointer < LENGTH_OF_WORD) {
        if(word[wordPointer] ===  phrase[phrasePointer]) {
            wordPointer += 1;
        }
        phrasePointer += 1;
    }

    return wordPointer === LENGTH_OF_WORD;
}

