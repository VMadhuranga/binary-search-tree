// eslint-disable-next-line import/extensions
import Tree from "./tree.js";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const BST = Tree(testArray);
BST.buildTree();

BST.insert(1000);
BST.insert(24);

BST.prettyPrint();
