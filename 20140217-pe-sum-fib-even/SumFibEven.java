public class SumFibEven {
    private final int LIMIT = 4000000;
    private int[] fibArray;

    public SumFibEven() {
        fibArray = new int[LIMIT];
    }

    private int fib(int n) {
        if (n == 0) return 1;
        if (n == 1) return 2;
        int f = 0;
        if (fibArray[n] > 0) f = fibArray[n];
        else {
            f = fib(n - 2) + fib(n - 1);
            fibArray[n] = f;
        }
        return f;
    }

    public int sumFibEven() {
        int f = 0, sum = 0, n = 0;
        while (f <= LIMIT) {
            f = fib(n++);
            if (f <= LIMIT && f % 2 == 0) sum += f;
        }
        return sum;
    }

    public static void main(String[] args) {
        SumFibEven s = new SumFibEven();
        int sum = s.sumFibEven();
        System.out.println(sum);
    }
}