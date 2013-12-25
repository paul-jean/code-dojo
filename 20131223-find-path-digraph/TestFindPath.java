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
public class TestFindPath {

    @Test 
    public void checkPath() {
        Digraph G = new Digraph(6);
        G.addEdge(0, 3);
        G.addEdge(3, 1);
        G.addEdge(4, 1);
        G.addEdge(2, 1);
        G.addEdge(2, 4);
        G.addEdge(5, 2);
        System.out.println("Graph:");
        System.out.println(G);
        System.out.println("Testing for path from 0 to 1:");
        assertEquals(true, FindPath.findPath(G, 0, 1));
        System.out.println("true");
    }

    @Test 
    public void checkPath1() {
        Digraph G = new Digraph(6);
        G.addEdge(0, 3);
        G.addEdge(3, 1);
        G.addEdge(4, 1);
        G.addEdge(2, 1);
        G.addEdge(2, 4);
        G.addEdge(5, 2);
        System.out.println("Graph:");
        System.out.println(G);
        System.out.println("Testing for path from 0 to 2:");
        assertEquals(false, FindPath.findPath(G, 0, 2));
        System.out.println("false");
    }

}