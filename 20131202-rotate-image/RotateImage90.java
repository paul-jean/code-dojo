public class RotateImage90 {

    public static int[][] rotate90(int[][] a) {
        int N = a.length;
        int[][] ar = new int[N][N];

        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++)
                ar[N-j-1][i] = a[i][j];

        return ar;
    }

    private static void print(int[][] a) {
        int N = a.length;
        for (int i = 0; i < N; i++)
            for (int j = 0; j < N; j++) {
                System.out.printf("%d ", a[i][j]);
                if (j == N-1) System.out.printf("\n");
            }
    }

    public static void main(String[] args) {
        int[][] a = {{0,1,2},{3,4,5},{6,7,8}};
        int[][] b = rotate90(a);
        print(a);
        System.out.println();
        print(b);
    }
}