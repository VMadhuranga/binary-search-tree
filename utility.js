/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/extensions
import Node from "./node.js";

const buildTreeRec = (array) => {
  if (array.length === 0) {
    return null;
  }

  const middle = Math.floor(array.length / 2);
  const node = Node(array[middle]);

  node.leftNode = buildTreeRec(array.slice(0, middle));
  node.rightNode = buildTreeRec(array.slice(middle + 1));

  return node;
};

const sortAndRemoveDuplicates = (array) => {
  let previousValue = null;
  const sortedArray = [];

  array
    .sort((a, b) => a - b)
    .forEach((value) => {
      if (value !== previousValue) {
        sortedArray.push(value);
        previousValue = value;
      }
    });

  return sortedArray;
};

const insertRec = (value, node) => {
  if (node === null) {
    return Node(value);
  }

  if (value < node.data) {
    node.leftNode = insertRec(value, node.leftNode);
  } else if (value > node.data) {
    node.rightNode = insertRec(value, node.rightNode);
  }

  return node;
};

const prettyPrintRec = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightNode !== null) {
    prettyPrintRec(
      node.rightNode,
      `${prefix}${isLeft ? "│   " : "    "}`,
      false,
    );
  }

  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.leftNode !== null) {
    prettyPrintRec(node.leftNode, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

export { buildTreeRec, sortAndRemoveDuplicates, insertRec, prettyPrintRec };
