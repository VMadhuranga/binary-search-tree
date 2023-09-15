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

export { buildTreeRec, sortAndRemoveDuplicates };
