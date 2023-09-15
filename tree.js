/* eslint-disable import/extensions */
import {
  buildTreeRec,
  sortAndRemoveDuplicates,
  prettyPrintRec,
} from "./utility.js";

const Tree = (array) => {
  let root = null;

  const buildTree = () => {
    root = buildTreeRec(sortAndRemoveDuplicates(array));
  };

  const prettyPrint = () => {
    prettyPrintRec(root);
  };

  return { buildTree, prettyPrint };
};

export default Tree;
