import { Permission } from '#/entity';
import { chain } from 'ramda';

/**
 * Flatten an array containing a tree structure
 * @param {T[]} trees - An array containing a tree structure
 * @returns {T[]} - Flattened array
 */
export function flattenTrees<T extends { children?: T[] }>(trees: T[] = []): T[] {
  return chain((node) => {
    const children = node.children || [];
    return [node, ...flattenTrees(children)];
  }, trees);
}
/**
 * nested an array containing a tree structure
 * @param {T[]} trees - An array containing a tree structure
 * @returns {T[]} - nested array
 */
export function flatToTree(flatArray: Permission[] = []): Permission[] {
  const map: { [key: string]: Permission } = {};
  const tree: Permission[] = [];

  // Create a mapping of id to TreeNode
  flatArray.forEach(node => {
    if(!map[node.id]) { // TODO: 后端返回重复数据
      map[node.id] = { ...node };
    }
  });
  // Populate the children array for each node
  for(let key in map) {
      let node = map[key]
      if (node.parent_id !== "") {
          const parent = map[node.parent_id!];
          if (parent) {
              parent.children = parent.children || [];
              parent.children.push(map[node.id]);
          }
      } else {
          tree.push(map[node.id]);
      }
  };
  console.log(999999,tree)
  return tree;
}