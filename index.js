// eslint-disable-next-line import/extensions
import Tree from "./tree.js";
// import { plusOne } from "./utility.js";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const BST = Tree(testArray);
BST.buildTree();

BST.insert(1000);
BST.insert(24);

BST.remove(1);
BST.remove(67);
BST.remove(6345);

BST.find("aaa");
BST.find();
BST.find(1500);
BST.find(23);

BST.levelOrder();
// BST.levelOrder(plusOne);

BST.prettyPrint();
