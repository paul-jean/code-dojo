import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.Ignore;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;


/**
 * Tests for {@Link CheckBST}.
 *
 * @author paul.jean.letourneau@gmail.com (Paul-Jean Letourneau)
 *
 */
@RunWith(JUnit4.class)
public class TestCheckBST {

    @Test 
    public void yesBST() {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(3);
        root.right = new TreeNode(12);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(7);
        root.right.left = new TreeNode(11);
        root.right.right = new TreeNode(15);
        System.out.println();
        System.out.println("Tree:");
        System.out.println(root.toString());
        assertEquals(true, CheckBST.checkBST(root));
        System.out.println("True");
    }

    @Test 
    public void noBST() {
        TreeNode root = new TreeNode(10);
        root.left = new TreeNode(3);
        root.right = new TreeNode(12);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(7);
        root.right.left = new TreeNode(11);
        root.right.right = new TreeNode(15);
        System.out.println();
        System.out.println("Tree:");
        System.out.println(root);
        assertEquals(false, CheckBST.checkBST(root));
        System.out.println("False");
    }
}