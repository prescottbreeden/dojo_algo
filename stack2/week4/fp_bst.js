console.log("running");

function tree() {
  return {
    head: null,
    size: 0,
  }
}

function node(val) {
  return {
    value: val,
    left: null,
    right: null
  }
}

function add(tree, val) {
  if (!tree.head) {
    return {
      ...tree.head = node(val),
    }
  }
  let runner = tree.head;
  while (runner) {
    if (val <= tree.value) {
      if (!runner.left) {
        runner.left = node(val);
        return {
          ...tree
        }
      }
      runner = runner.left;
    }
    if (val > tree.value) {
      if(!runner.right) {
        runner.right = node(val);
        return {
          ...tree
        }
      }
      runner = runner.right;
    }
  }
}


let alice = tree();
console.log(alice);
add(alice, 5);
console.log(alice);
add(alice, 4);
