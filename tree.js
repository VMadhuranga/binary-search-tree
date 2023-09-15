// eslint-disable-next-line import/extensions
import { buildTreeRec, sortAndRemoveDuplicates } from "./utility.js";

const Tree = (array) => {
  let root = null;

  const buildTree = () => {
    root = buildTreeRec(sortAndRemoveDuplicates(array));
  };

  return { buildTree };
};

export default Tree;
