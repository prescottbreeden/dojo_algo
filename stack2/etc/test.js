function sll() {
  this.head = null;
}

function node(val) {

  this.value = val;
  this.next = null;
  // complete the class
}

sll.prototype.addToFront = function(n) {

  if(this.head == null) {
    this.head = n;
  }
  else
  {
    let temp = this.head;
    this.head = n;
    n.next = temp;
  }

}

sll.prototype.addToBack = function(n) {
  let runner = this.head;
  if(!this.head) {
    return this.head = n;
  }

  while(runner.next) {
    runner = runner.next;
  }
  runner.next = n;
}

sll.prototype.sizeof = function() {
  runner = this.head;

  if(runner == null) {
    return 0;
  }
  else {
    count = 1;

    while(runner.next) {
      count++;
      runner = runner.next;
    }
    return count;
  }
}

sll.prototype.reverse = function() {
  if (!this.head) { return; }

  let prev = null; // set previous node
  let current = this.head; // set current?
  let next = this.head.next; // set next

  while(next) // while there is a next
  {
    current.next = prev; // point the current node at previous
    prev = current; // move previous up to current
    current = next; // move current to next;
    next = current.next; // move the next node to the next of current
  }
  current.next = prev;
  this.head = current;
}

sll.prototype.print = function() {
  if (!this.head) { return; }
  let runner = this.head;
  while (runner) {
    console.log(runner.value);
    runner = runner.next;
  }
}

sList = new sll();
node1 = new node(1);
node2 = new node(2);
node3 = new node(3);
node4 = new node(4);
node5 = new node(5);
node6 = new node(6);
sList.addToBack(node1);
sList.addToBack(node2);
sList.addToBack(node3);
sList.addToBack(node4);
sList.addToBack(node5);
sList.addToBack(node6);
sList.print();
sList.reverse();
console.log("===============================");
sList.print();




// runner = sList.head;
// while(runner != null)
// {
//   console.log(runner.value);
//   runner = runner.next;
// }

// console.log(sList.sizeof());

// sList.reverse();

// while(runner != null)
// {
//   console.log(runner.value);
//   runner = runner.next;
// }
// execute this file in your terminal by running 'node sll.js'

