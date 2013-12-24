public class FindPath {
    boolean visited;
    
    public boolean findPath(Digraph G, int source, int target) {

        visited = new boolean[G.V()];
        return dfs(G, source, target);
    }

    private boolean dfs(Digraph G, int v, int target) {

        visited[v] = true;
        if (v == target) return true;
        for (int w: G.adj(v)) {
            if (!visited[w]) {
                visited[w] = true;
                if (w == target) return true;
                else return dfs(w);
            }
        }
        return false;
    }
}