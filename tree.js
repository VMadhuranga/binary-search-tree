/* eslint-disable import/extensions */
import {
  buildTreeRec,
  sortAndRemoveDuplicates,
  prettyPrintRec,
  insertRec,
  removeRec,
  findRec,
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
        dataContainer.push(callback(queue[0].data));
      } else {
        dataContainer.push(queue[0].data);
      }

      if (queue[0].leftNode !== null) queue.push(queue[0].leftNode);
      if (queue[0].rightNode !== null) queue.push(queue[0].rightNode);
      queue.shift();
    }

    console.log(dataContainer);
  };

  const prettyPrint = () => {
    prettyPrintRec(root);
  };

  return { buildTree, insert, remove, find, levelOrder, prettyPrint };
};

export default Tree;
