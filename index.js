/* eslint-disable import/extensions */
import Tree from "./tree.js";
import { plusOne } from "./utility.js";

const testArray = [
  23, 11, 25, 25, 27, 11, 7, 11, 21, 5, 15, 24, 26, 6, 1, 28, 8, 8, 6, 16, 20,
  23, 1, 8, 29, 12, 25, 16, 28, 16,
];

// Test cases
// Uncomment to test

const BST = Tree(testArray);
// Build Tree
// BST.buildTree();

// Log Tree
// BST.prettyPrint();

// Insert value to BST
// BST.insert(1000);
// BST.insert(2);

// Duplicate value will be ignored
// BST.insert(24);
// BST.insert(20);
// BST.insert(2);

// BST.prettyPrint();

// Remove value from BST

// Remove a leaf node in BST
// BST.remove(2);
// BST.remove(11);
// BST.remove(21);

// BST.prettyPrint();

// Remove a node with single child in BST
// BST.remove(29);
// BST.remove(5);
// BST.prettyPrint();

// Delete a node with both children in BST
// BST.remove(28);
// BST.remove(26);
// BST.remove(27);
// BST.prettyPrint();

// Find node from given value

// Correct value
// BST.find(1);
// BST.find(8);
// BST.find(24);

// Wrong values
// BST.find();
// BST.find("aaa");
// BST.find(1500);
// BST.prettyPrint();

// levelOrder function without callback function
// BST.levelOrder();

// levelOrder function with callback function
// BST.levelOrder(plusOne);

// preOrder function without callback function
// BST.preOrder();

// preOrder function with callback function
// BST.preOrder(plusOne);

// inOrder function without callback function
// BST.inOrder();

// inOrder function with callback function
// BST.inOrder(plusOne);

// postOrder function without callback function
// BST.postOrder();

// postOrder function with callback function
// BST.postOrder(plusOne);

// Check height of given node
// BST.height();
// BST.height(8);
// BST.height(7);

// Wrong values
// BST.height(13);
// BST.height("9");
// BST.prettyPrint();

// Check depth of given node
// BST.depth(20);
// BST.depth(8);
// BST.depth(12);

// Wrong values
// BST.depth();
// BST.depth(5);
// BST.depth("aaa");
// BST.prettyPrint();

// Check if tree is balanced
// BST.isBalanced();
// BST.prettyPrint();

// Re-balance the tree if unbalanced
// BST.reBalance();
