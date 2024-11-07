export function arrayToTree(data:API.MenuItem[], parentId = 0) {
  const tree = [];
  const map = {};

  data.forEach(item => {
    map[item.id] = item;
    item.children = [];
  });

  data.forEach(item => {
    const parent = map[item.parentId];
    if (parent) {
      parent.children.push(item);
    } else  
 {
      tree.push(item);
    }
  });

  return tree;
}
