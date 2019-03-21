function sll() {
  this.head;
}

function node(val) {
  this.val = val;
  this.next = null;
}

sll.prototype.print = function() {
  let runner = this.head;
  console.log(runner.val);
  do {
    runner = runner.next;
    console.log(runner.val);
  } while (runner.next);
}

sll.prototype.sizeof = function() {
  let count = 0;
  let runner = this.head;
  count++
  do {
    runner = runner.next;
    count++
  } while (runner.next);
  console.log(count);
}

sll.prototype.addNew = function(val) {
  const new_node = new node(val);
  if (this.head) {
    let runner = this.head;
    while (runner.next) {
      runner = runner.next;
    }
    runner.next = new_node;
  }
  else {
    this.head = new_node;
  }
  return this;
}

let reverseLinkedList = function(sll) {
  let runner = sll.head;
  let walker = null;
  while(runner.next) {
    let temp = runner.next;
    runner.next = walker;
    walker = runner;
    runner = temp;
  }
  runner.next = walker;
  sll.head = null;
  sll.head = runner;
}

let listLength = function(node) {
  if (!node) { 
    return 0;
  }
  else {
    return listLength(node.next) + 1;
  }
    // return listLength(node) + 1;
}


let bob = new sll();
bob.addNew(1).addNew(2).addNew(3).addNew(4).addNew(5);
x = listLength(bob.head);
console.log(x);

let my_reverseLinkedList = function(sll) {
  let node = sll.head;
  let prev = null;

  while(node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  sll.head = prev;
}
