public class EncodeString {

    public static char[] encode(char[] letters, int size) {
        char space = (char)" ";
        int num_spaces = (letters.length - size)/2;
        for (int i = size - 1; i >= 0; i--) {
            if (letters[i] == space) {
                int pos = i + 2*num_spaces;
                letters[pos] = (char)"0";
                letters[pos - 1] = (char)"2";
                letters[pos - 2] = (char)"%";
                num_spaces--;
            } else {
                swap(letters, i, i + 2*num_spaces)
            }
        }
        return letters;
    }

    private void swap(char[] letters, int i, int j) {
        char temp = letters[i];
        letters[i] = letters[j];
        letters[j] = temp;
    }
}
