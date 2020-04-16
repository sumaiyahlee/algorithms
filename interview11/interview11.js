/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let sArray = s.split('');
    let frequency = {};
    for (let i = 0; i < sArray.length; i++) {
        const ch = sArray[i];
        if (frequency[ch]) {
            frequency[ch]++;
        }
        else {
            frequency[ch] = 1;
        }
    }

    let fLetters = Object.entries(frequency);
    const sortArray = fLetters.sort((a,b) => a[1] - b[1]).map((arr) => arr[0]).reverse().join('');
    return sortArray;
};


console.log(frequencySort("treeee"));