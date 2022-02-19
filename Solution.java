
public class Solution {

    public int numKLenSubstrNoRepeats(String s, int k) {

        final int alphabet = 26;
        final int size = s.length();
        int[] frequency = new int[alphabet];

        int left = 0;
        int right = 0;
        int counterSubstringsWithNoRepeatedChars = 0;

        while (right < size) {

            frequency[s.charAt(right) - 'a']++;

            while (frequency[s.charAt(right) - 'a'] > 1) {
                frequency[s.charAt(left++) - 'a']--;
            }

            if (right - left + 1 == k) {
                frequency[s.charAt(left++) - 'a']--;
                counterSubstringsWithNoRepeatedChars++;
            }
            right++;
        }

        return counterSubstringsWithNoRepeatedChars;
    }
}
