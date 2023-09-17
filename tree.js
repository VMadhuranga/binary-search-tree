/* eslint-disable import/extensions */
import {
  buildTreeRec,
  sortAndRemoveDuplicates,
  prettyPrintRec,
  insertRec,
  removeRec,
  findRec,
  preOrderRec,
  inOrderRec,
  postOrderRec,
} from "./utility.js";

const Tree = (array) => {
  let root = null;

  const buildTree = () => {
    root = buildTreeRec(sortAndRemoveDuplicates(array));
  };

  const insert = (value) => {
    root = insertRec(value, root);
  };

  const remove = (value) => {
    root = removeRec(value, root);
  };

  const find = (value) => {
    console.log(findRec(value, root));
  };

  const levelOrder = (callback = null) => {
    if (root === null) {
      return;
    }

    const queue = [];
    const dataContainer = [];
    queue.push(root);

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

    console.log(dataContainer);
  };

  const preOrder = (callback = null) => {
    const dataContainer = [];
    preOrderRec(root, dataContainer, callback);
    console.log(dataContainer);
  };

  const inOrder = (callback = null) => {
    const dataContainer = [];
    inOrderRec(root, dataContainer, callback);
    console.log(dataContainer);
  };

  const postOrder = (callback = null) => {
    const dataContainer = [];
    postOrderRec(root, dataContainer, callback);
    console.log(dataContainer);
  };

  const prettyPrint = () => {
    prettyPrintRec(root);
  };

  return {
    buildTree,
    insert,
    remove,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    prettyPrint,
  };
};

export default Tree;
