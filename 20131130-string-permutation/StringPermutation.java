import java.util.HashMap;

public class StringPermutation {

    // Tests if string s1 is a permutation of s2.
    public static boolean isPermutation(String s1, String s2) {
        // s1 and s2 can't be permutations if they don't have the same length:
        if (s1.length() != s2.length()) return false;
        if (s1.length() == 0) return true;

        // s1 and s2 are permutations iff their character tallies are the same. 
        HashMap<Integer, Integer> h1 = new HashMap<Integer, Integer>();
        HashMap<Integer, Integer> h2 = new HashMap<Integer, Integer>();
        
        for (int i = 0; i < s1.length(); i++) {
            int c1 = s1.charAt(i);
            int c2 = s2.charAt(i);
            if (h1.containsKey(c1)) {
                int count1 = h1.get(c1);
                h1.put(c1, count1 + 1);
            } else {
                h1.put(c1, 1);
            }
            if (h2.containsKey(c2)) {
                int count2 = h2.get(c2);
                h2.put(c2, count2 + 1);
            } else {
                h2.put(c2, 1);
            }
        }

        return h1.equals(h2);
    }

    public static void main(String[] args) {
        String s1 = "aba";
        String s2 = "aab";

        System.out.println("s1 = " + s1 + ", s2 = " + s2);
        System.out.println(isPermutation(s1, s2));

    }
}