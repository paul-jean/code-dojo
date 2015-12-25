function countPaths(n) {
    if (n < 1) return 0;
    if (n >= 3)
        // take a hop of 1, 2 or 3
        return 1 + countPaths(n-1) +
            1 + countPaths(n-2) +
            1 + countPaths(n-3);
    if (n == 2)
        // take a hop of 1 or 2
        return 1 + countPaths(n-1) +
            1 + countPaths(n-2);
    if (n == 1)
        // take a hop of 1
        return 1 + countPaths(n-1);
    return 0;
}
