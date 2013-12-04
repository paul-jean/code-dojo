import java.util.Arrays;
public class ZeroRowColumn {

    public static int[][] setZeroRowColumn(int[][] a) {

        int N = a[0].length;
        int M = a.length;
        int[][] az = new int[M][N];
        for (int i = 0; i < M; i++) az[i] = Arrays.copyOf(a[i], N);
        int[] zero_row = new int[N];
        for (int j = 0; j < N; j++) zero_row[j] = 0;

        for (int i = 0; i < M; i++)
            for (int j = 0; j < N; j++) {
                if (a[i][j] == 0) {
                    az[i] = zero_row;
                    for (int k = 0; k < M; k++) az[k][i] = 0;
                }
            }

        return az;
    }

    private static void printArray(int[][] a) {
        for (int i = 0; i < a.length; i++)
            for (int j = 0; j < a[0].length; j++) {
                System.out.printf("%-2d", a[i][j]);
                if (j == a[0].length - 1) System.out.printf("\n");
                else System.out.printf(" ");
            }
    }

    public static void main(String args[]) {
        int[][] test = {{1, 2, 3}, {4, 0, 6}, {7, 8, 9}, {10, 11, 12}};
        System.out.println("array:");
        printArray(test);
        int[][] testz = setZeroRowColumn(test);
        System.out.println("zero'd:");
        printArray(testz);
    }
}