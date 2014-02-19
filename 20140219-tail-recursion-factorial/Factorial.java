public class Factorial {

    public static long fact(long n) {
        if (n == 0) return 1;
        return n * fact(n - 1);
    }

    public static long factTail(long n, long acc) {
        if (n == 1) return acc;
        return factTail(n - 1, n * acc);
    }

    public static void main(String[] args) {
        System.out.println("fact(5) ="); 
        System.out.println(fact(5)); 
        System.out.println("factTail(5, 1) ="); 
        System.out.println(factTail(5, 1)); 

        // Largest n for which n! < 2^63-1 is n = 20
        System.out.println("fact(20) ="); 
        System.out.println(fact(20)); 

        System.out.println("factTail(20, 1) ="); 
        System.out.println(factTail(20, 1)); 
    }

}