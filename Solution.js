
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function (s, k) {


    const size = s.length;
    const alphabet = 26;
    const ascii_small_case_a = 97;
    const frequency = new Array(alphabet).fill(0);

    let left = 0;
    let right = 0;
    let counterSubstringsWithNoRepeatedChars = 0;

    while (right < size) {

        frequency[s.codePointAt(right) - ascii_small_case_a]++;

        while (frequency[s.codePointAt(right) - ascii_small_case_a] > 1) {
            frequency[s.codePointAt(left++) - ascii_small_case_a]--;
        }

        if (right - left + 1 === k) {
            frequency[s.codePointAt(left++) - ascii_small_case_a]--;
            counterSubstringsWithNoRepeatedChars++;
        }
        right++;
    }
    return counterSubstringsWithNoRepeatedChars;
};
