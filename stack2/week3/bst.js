function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function Bst() {
  this.root = null;
}

Bst.prototype.insert = function (val, node = this.root) {
  if (!this.root) {
    return this.root = new Node(val);
  }
  if (val < node.value) {
    if (!node.left) return node.left = new Node(val);
    return this.insert(val, node.left);
  }
  if (val > node.value) {
    if (!node.right) return node.right = new Node(val);
    return this.insert(val, node.right);
  }
  if (val === node.value) {
    throw 'value already exists in tree, no dupes not allowd';
  }
}

Bst.prototype.size = function (node=this.root) {
  if (!node) return 0;
  return 1 + this.size(node.left) + this.size(node.right);
}

Bst.prototype.height = function (node = this.root) {
  if (!node) return -1;
  return 1 + Math.max(this.height(node.left), this.height(node.right));
}

Bst.prototype.contains = function (val, node=this.root) {
  if (!node) return false;
  let runner = node;
  while (node) {
    if (node.value === val) return true;
    if (val < node.value) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return false;
}

Bst.prototype.isValid = function (node=this.root, MIN=-Infinity, MAX=Infinity) {
    if(node == null) return true;
    if(node.value > MIN
      && node.value < MAX
      && this.isValid(node.left, MIN, node.value)
      && this.isValid(node.right, node.value, MAX)) {
        return true;
    } else {
      return false;
    }
}


let bob = new Bst();
bob.insert(8);
bob.insert(10);
bob.insert(5);
bob.insert(2);

console.log(bob.size());
console.log(bob.height());
console.log(bob.contains(3));
console.log(bob.isValid());
