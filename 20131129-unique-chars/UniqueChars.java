import java.util.HashMap;
import java.lang.IllegalArgumentException;
import java.lang.Integer;

public class UniqueChars {

    public static boolean isUniqueChars(String s) {

        if (s.length() == 0) throw new IllegalArgumentException();
        if (s.length() == 1) return true;

        HashMap<String, Integer> charCounts = new HashMap<String, Integer>();

        for (int i=0; i < s.length(); i++) {
            String c = String.valueOf(s.charAt(i));
            if (charCounts.containsKey(c)) return false;
            else charCounts.put(c, 1);
        }
        return true;
    }

    public static boolean isUniqueCharsNoHashMap(String s) {
        if (s.length() == 0) throw new IllegalArgumentException();
        if (s.length() == 1) return true;
        char[] chars = new char[s.length()];
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            chars[i] = c;
            for (int j = 0; j < i; j++) {
                if (chars[j] == c) return false;
            }
        }
        return true;
    }
    
    public static void main(String[] args) {

        String s1 = "";
        String s2 = "a";
        String s3 = "b";
        String s4 = "aa";
        String s5 = "ab";
        String s6 = "abcdefgh";
        String s7 = "abcdefgha";
        String[] tests = new String[] {s1, s2, s3, s4, s5, s6, s7};

        for (int i=0; i < tests.length; i++) {
            try { 
            System.out.println("s = " + tests[i]);
            System.out.println("isUniqueChars(" + tests[i] + ") = " + isUniqueChars(tests[i]));
            System.out.println("isUniqueCharsNoHashMap(" + tests[i] + ") = " + isUniqueCharsNoHashMap(tests[i]));
            } 
            catch (IllegalArgumentException e) {
               System.out.println("String must be nonempty!");
            }
        }

    }

}