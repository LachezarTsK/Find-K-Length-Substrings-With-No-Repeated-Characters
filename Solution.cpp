
#include <vector>
using namespace std;

class Solution {
public:

    int numKLenSubstrNoRepeats(string s, int k) {

        const size_t alphabet = 26;
        const size_t size = s.length();
        vector<int> frequency(alphabet, 0);

        int left = 0;
        int right = 0;
        int counterSubstringsWithNoRepeatedChars = 0;

        while (right < size) {

            frequency[s[right] - 'a']++;

            while (frequency[s[right] - 'a'] > 1) {
                frequency[s[left++] - 'a']--;
            }

            if (right - left + 1 == k) {
                frequency[s[left++] - 'a']--;
                counterSubstringsWithNoRepeatedChars++;
            }
            right++;
        }

        return counterSubstringsWithNoRepeatedChars;
    }
};
