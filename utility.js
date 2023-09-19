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
    console.log(`${value} inserted`);
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
    console.log(`${value} removed`);
    return node;
  }

  if (value === node.data && node.leftNode === null) {
    node = node.rightNode;
    console.log(`${value} removed`);
    return node;
  }

  if (value === node.data && node.rightNode === null) {
    node = node.leftNode;
    console.log(`${value} removed`);
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
    console.log(`${value} removed`);
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

const levelOrderIter = (node, dataContainer, callback) => {
  if (node === null) {
    return;
  }

  const queue = [];
  queue.push(node);

  while (queue.length > 0) {
    if (callback instanceof Function) {
      dataContainer.push(callback(queue[0]));
    } else {
      dataContainer.push(queue[0].data);
    }

    if (queue[0].leftNode !== null) queue.push(queue[0].leftNode);
    if (queue[0].rightNode !== null) queue.push(queue[0].rightNode);
    queue.shift();
  }
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

const heightRec = (node, counter = 0) => {
  if (node === null || (node.leftNode === null && node.rightNode === null)) {
    return counter;
  }

  const leftNodeHeight = heightRec(node.leftNode, counter + 1);
  const rightNodeHeight = heightRec(node.rightNode, counter + 1);

  if (leftNodeHeight > rightNodeHeight) return leftNodeHeight;
  return rightNodeHeight;
};

const depthRec = (root, node, counter = 0) => {
  if (root === null || root === node) {
    return counter;
  }

  const leftNodeHeight = depthRec(root.leftNode, node, counter + 1);
  const rightNodeHeight = depthRec(root.rightNode, node, counter + 1);

  if (root.data > node.data) return leftNodeHeight;
  return rightNodeHeight;
};

const checkTreeBalance = (node) => {
  if (node === null) return null;

  const leftSubTreeHeight = heightRec(node.leftNode);
  const rightSubTreeHeight = heightRec(node.rightNode);

  return (
    leftSubTreeHeight === rightSubTreeHeight ||
    leftSubTreeHeight - rightSubTreeHeight === 1 ||
    rightSubTreeHeight - leftSubTreeHeight === 1
  );
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
  levelOrderIter,
  preOrderRec,
  inOrderRec,
  postOrderRec,
  heightRec,
  depthRec,
  checkTreeBalance,
  prettyPrintRec,
  plusOne,
};
