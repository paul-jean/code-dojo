public class SumFibEven {
    private static final int LIMIT = 4000000;
    private int[] fibArray;

    public SumFibEven() {
        fibArray = new int[LIMIT];
    }

    private int fib(int n) {
        if (n == 0) return 1;
        if (n == 1) return 2;
        int f = 0;
        if (fibArray[n] != null) f = fibArray[n];
        else {
            f = fib(n - 2) + fib(n - 1);
            fibArray[n] = f;
        }
        return f;
    }

    public static void main(String[] args) {
        int f = 0, sum = 0, n = 0;
        while (f <= LIMIT) {
            f = fib(n++);
            sum += f;
        }
        System.out.println(sum);
    }
}