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

const removeRec = (value, node) => {
  if (node === null) {
    return node;
  }

  if (
    value === node.data &&
    node.leftNode === null &&
    node.rightNode === null
  ) {
    node = null;
    return node;
  }

  if (value === node.data && node.leftNode === null) {
    node = node.rightNode;
    return node;
  }

  if (value === node.data && node.rightNode === null) {
    node = node.leftNode;
    return node;
  }

  if (
    value === node.data &&
    node.leftNode !== null &&
    node.rightNode !== null
  ) {
    let successor = node.rightNode;
    let previousSuccessor = null;

    while (successor.leftNode !== null) {
      previousSuccessor = successor;
      successor = previousSuccessor.leftNode;
    }

    if (successor === node.rightNode) {
      successor.leftNode = node.leftNode;
    } else {
      previousSuccessor.leftNode = successor.rightNode;
      successor.leftNode = node.leftNode;
      successor.rightNode = node.rightNode;
    }

    node = successor;
    return node;
  }

  if (value < node.data) {
    node.leftNode = removeRec(value, node.leftNode);
  } else if (value > node.data) {
    node.rightNode = removeRec(value, node.rightNode);
  }

  return node;
};

const findRec = (value, node) => {
  if (value === node?.data) {
    return node;
  }

  if (value < node?.data) {
    return findRec(value, node.leftNode);
  }

  if (value > node?.data) {
    return findRec(value, node.rightNode);
  }

  return null;
};

const preOrderRec = (node, dataContainer, callback) => {
  if (node === null) {
    return;
  }

  if (callback instanceof Function) {
    dataContainer.push(callback(node));
  } else {
    dataContainer.push(node.data);
  }

  preOrderRec(node.leftNode, dataContainer, callback);
  preOrderRec(node.rightNode, dataContainer, callback);
};

const inOrderRec = (node, dataContainer, callback) => {
  if (node === null) {
    return;
  }

  inOrderRec(node.leftNode, dataContainer, callback);

  if (callback instanceof Function) {
    dataContainer.push(callback(node));
  } else {
    dataContainer.push(node.data);
  }

  inOrderRec(node.rightNode, dataContainer, callback);
};

const postOrderRec = (node, dataContainer, callback) => {
  if (node === null) {
    return;
  }

  postOrderRec(node.leftNode, dataContainer, callback);
  postOrderRec(node.rightNode, dataContainer, callback);

  if (callback instanceof Function) {
    dataContainer.push(callback(node));
  } else {
    dataContainer.push(node.data);
  }
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

// a function for to check level order callback parameter
function plusOne(value) {
  return value.data + 1;
}

export {
  buildTreeRec,
  sortAndRemoveDuplicates,
  insertRec,
  removeRec,
  findRec,
  preOrderRec,
  inOrderRec,
  postOrderRec,
  prettyPrintRec,
  plusOne,
};
