/* eslint-disable import/extensions */
import {
  buildTreeRec,
  sortAndRemoveDuplicates,
  prettyPrintRec,
  insertRec,
  removeRec,
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

  const prettyPrint = () => {
    prettyPrintRec(root);
  };

  return { buildTree, insert, remove, prettyPrint };
};

export default Tree;
