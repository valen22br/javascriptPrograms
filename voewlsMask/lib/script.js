
/**
 * Sumary.
 * mask to find a sequence of consonants and/or vowels in a string.
 * Description.
 * functions that returns the amount of times the mask was found on the myString. 
 * 
 * @param {string} mask 'i.e. 010 represent a mask for "vowel - consonant - vowel" pattern'
 * @param {string} myString 
 * 
 * @returns {integer} 'the amount of times the mask was found on the string'
 */
const maskVoewls = (mask, myString) => {
    let foundCount = 0;
    let interactions = 0;
    let vowelList = 'aeiouAEIOU';
    let indexMemoization = 0;
    console.log(mask, myString, mask.length, myString.length);

    if (myString.length < mask.length){
        return 0;
    } else if (myString.length === mask.length){
        interactions = 1;
    } else {
        interactions = myString.length - (mask.length -1);
    }

    for (let i = 0; i < interactions; i++){
        for (let j = 0; j < mask.length; j++) {
            //vowel cases
            if (mask[j] === '0') {
                if (!(vowelList.indexOf(myString[i]) !== -1)) {
                    break;
                }
            } else {
                // consonant cases
                if (vowelList.indexOf(myString[i]) !== -1) {
                    break;
                }
            }
            if (j == (mask.length -1)){
                foundCount ++;
                break
            }
            i++;
            indexMemoization--;
        }
        i+= indexMemoization;
        indexMemoization = 0;
    }
    return foundCount;
}

console.log('0 is : ', maskVoewls('010', 'am'));
console.log('2 is :', maskVoewls('010', 'amazing'));
console.log('8 is :', maskVoewls('1', 'amazingamazing'));
console.log('0 is :', maskVoewls('010010', 'amazingamazing'));