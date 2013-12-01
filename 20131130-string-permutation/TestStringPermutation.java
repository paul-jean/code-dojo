import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.Ignore;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;


/**
 * Tests for {@Link Point}.
 *
 * @author paul.jean.letourneau@gmail.com (Paul-Jean Letourneau)
 *
 */
@RunWith(JUnit4.class)
public class TestStringPermutation {

    private final Out out = new Out();
    private final boolean debug = true;

    @Test 
    public void twoChars() {
        String s1 = "aba";
        String s2 = "aab";
        assertEquals(StringPermutation.isPermutation(s1, s2), true);
    }

    @Test 
    public void emptyStrings() {
        String s1 = "";
        String s2 = "";
        assertEquals(StringPermutation.isPermutation(s1, s2), true);
    }

    @Test 
    public void differentLengths() {
        String s1 = "aba";
        String s2 = "ab";
        assertEquals(StringPermutation.isPermutation(s1, s2), false);
    }

}
