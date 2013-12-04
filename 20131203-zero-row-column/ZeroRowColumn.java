import java.util.Arrays;
public class ZeroRowColumn {

    public static int[][] setZeroRowColumn(int[][] a) {

        int N = a[0].length;
        int M = a.length;
        int[][] az = Arrays.copyOf(a);
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
}