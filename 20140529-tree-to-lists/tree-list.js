var lls = {};

var treeToList = function (root) {
  convertTree(root, 0);
};

var convertTree = function (node, level) {
  if (!lls[level]) {
    lls[level] = null;
  }
  var head = lls[level];
  var newHead = {value: node.data, next:null};
  newHead.next = head;
  lls[level] = newHead;
  if (node.left) {
    convertTree(node.left, level + 1);
  }
  if (node.right) {
    convertTree(node.right, level + 1);
  }
};

var Node = function (left, right, data) {
  this.left = left;
  this.right = right;
  this.data = data;
};

var root = new Node(null, null, "0");
var createTree = function(node, level, totalLevels) {
  if (level < totalLevels) {
    node.left = new Node(null, null, node.data + "L");
    createTree(node.left, level + 1, totalLevels);
    node.right = new Node(null, null, node.data + "R");
    createTree(node.right, level + 1, totalLevels);
  }
};

createTree(root, 0, 4);

treeToList(root);

var printTree = function (node, level) {
  var indent = "";
  for (var i = 0; i < level; i ++) {
    indent += "-";
  }
  if (node.left) {
    printTree(node.left, level + 1);
  }
  console.log(indent + node.data);
  if (node.right) {
    printTree(node.right, level + 1);
  }
};

console.log("The binary tree looks like:\n");
printTree(root, 0);

console.log("\n\nThe corresponding linked lists, one per tree level:\n");
for (var i = 0; i < 5; i ++) {
  console.log("level " + i + ":");
  var head = lls[i];
  var levelString = "";
  while (head) {
    levelString += head.value + ":";
    head = head.next;
  }
  console.log(levelString);
}
