public class RotateImage90 {

    public static int[][] rotate90(int[][] a) {
        int N = a.length;
        int[][] ar = new int[N][N];

        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                ar[N - j - 1][i] = a[i][j];

        return ar;
    }
}