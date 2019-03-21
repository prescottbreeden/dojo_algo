function node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function bst() {
  this.root = null;
}

bst.prototype.createRoot = function(val) {
  this.root = new node(val);
}

bst.prototype.rinsert = function(val, n=this.root) {
  if (!this.root) {
    this.root = new node(val);
    return this;
  }
  if (val <= n.val) {
    if (!n.left) {
      n.left = new node(val);
      return this;
    }
    this.rinsert(val, n.left);
  }
  if (val > n.val) {
    if (!n.right) {
      n.right = new node(val);
      return this;
    }
    this.rinsert(val, n.right);
  }
  return this;
}

bst.prototype.insert = function(val) {
  if (!this.root) {
    this.root = new node(val);
    return this;
  }
  let runner = this.root;
  while(runner) {
    if (val <= runner.val) {
      if (!runner.left) {
        runner.left = new node(val);
        return this;
      }
      runner = runner.left;
    }
    if (val > runner.val) {
      if (!runner.right) {
        runner.right = new node(val);
        return this;
      }
      runner = runner.right;
    }
  }
}

function addNode(n, val) {
  // this if-check is broken...
  if(!n) {
    return n = new node(val);
  } 
  if (val <= n.val) {
    if (!n.left) {
      return n.left = new node(val);
    }
    addNode(n.left, val);
  }
  if (val > n.val) {
    if (!n.right) {
      return n.right = new node(val);
    }
    addNode(n.right, val);
  }
}

function contains(node, val) {
  if (!node) { return false; }
  if (node.val === val) { return true; }
  if (val < node.val) { return contains(node.left, val); }
  if (val > node.val) { return contains(node.right, val); }
}

function mapTree(node, callback) {
  if(!node) { return; }
  node.val = callback(node.val);
  if (node.left) {
    mapTree(node.left, callback);
  }
  if (node.right) {
    mapTree(node.right, callback);
  }
}

function doubleVal(x) {
  return x * 2;
}

function size(node) {
  if (!node) { return 0 };
  return size(node.right) + size(node.left) + 1;
}

function height(node) {
  if (!node) { return -1; }
  lefth = height(node.left);
  righth = height(node.right);
  if (lefth > righth) {
    return lefth + 1;
  }
  return righth +1;
}


let bob = new bst();
console.log("\n----------------------------------\n")
bob.rinsert(6).rinsert(4).rinsert(10).rinsert(11).rinsert(2).rinsert(12).rinsert(1);
let x = size(bob.root);
console.log("size of tree: ", x);
mapTree(bob.root, doubleVal);
let search = contains(bob.root, 22);
console.log("contains 22: ", search);
let h = height(bob.root);
console.log("height: ", h);
console.log(bob);
console.log("\n----------------------------------\n")


/*
 * scratch...
addNode(bob.root, 6);
addNode(bob.root, 4);
addNode(bob.root, 10);
addNode(bob.root, 11);
addNode(bob.root, 2);
*/
