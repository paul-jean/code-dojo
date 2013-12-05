public class TestRotation {

    public static boolean isRotation(String s1, String s2) {

        int n1 = s1.length();
        String first_half = s1.substring(0, n1/2);
        String last_half = s1.substring(n1/2 + 1, n1 - 1);
        if (isSubstring(first_half, s2) || isSubstring(last_half, s2))
            return true;
        return false;
    }

    private static boolean isSubstring(String s, String sub) {
        return s.indexOf(sub) >= 0;
    }

    public static void main(String[] args) {

        String s1 = "erbottlewat";
        String s2 = "waterbottle";
        System.out.println("s1 = " + s1);
        System.out.println("s2 = " + s2);
        System.out.println("isRotation(s1, s2) = " + isRotation(s1, s2));
    }
}