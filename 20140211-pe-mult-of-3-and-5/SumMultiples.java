public class SumMultiples {
    
    public static int sumMultiples() {

        int max = 1000;
        int sum = 0;

        for (int i = 0; i < max; i++)
            if (i % 3 == 0 || i % 5 == 0) sum += i;

        return sum
    }
}