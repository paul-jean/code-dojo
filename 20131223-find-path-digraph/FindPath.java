public class FindPath {
    static boolean[] visited;
    
    public static boolean findPath(Digraph G, int source, int target) {

        visited = new boolean[G.V()];
        return dfs(G, source, target);
    }

    private static boolean dfs(Digraph G, int v, int target) {

        visited[v] = true;
        if (v == target) return true;
        for (int w: G.adj(v)) {
            if (!visited[w]) {
                visited[w] = true;
                if (w == target) return true;
                else return dfs(G, w, target);
            }
        }
        return false;
    }
}