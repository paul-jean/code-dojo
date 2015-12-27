function countPaths(x, y, X, Y) {
    if (x < X && y < Y)
        return countPaths(x+1, y, X, Y) + countPaths(x, y+1, X, Y);
    if (x < X && y === Y)
        return countPaths(x+1, y, X, Y);
    if (x === X && y < Y)
        return countPaths(x, y+1, X, Y);
    // must be at bottom right
    return 1;
}

console.log("X, Y = 2, 2");
console.log(countPaths(1, 1, 2, 2));

console.log("X, Y = 3, 3");
console.log(countPaths(1, 1, 3, 3));

