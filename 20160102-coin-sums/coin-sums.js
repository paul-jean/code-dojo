function countSums(n) {
    if (n < 0) return 0;
    if (n <= 1) return 1;
    var coins = [25, 10, 5, 1];
    var numSums = 0;
    for (var coin of coins)
            numSums += countSums(n - coin);
    return numSums;
}

countSums(0)
// 0
countSums(1)
// 1

countSums(2)
// 1

tests = [
    0, // 0
    1, // 1
    2, // 1
    5, // 2
    6, // 3
    10 // ?
];

for (var test of tests) {
    console.log(test + " = ");
    console.log(countSums(test));
    console.log("****");
}
