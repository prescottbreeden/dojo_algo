function sll() {
  this.head;
}

function node(val) {
  this.val = val;
  this.next = null;
}

sll.prototype.print = () => {
  let runner = this.head;
  while(runner.next) {
    console.log(runner);
    runner = runner.next;
  }
}

sll.prototype.add = (val) => {
  const newNode = new node(val);
  let runner = this.head;
  if (!this.head) return this.head = newNode;
  while(runner.next) {
    runner = runner.next;
  }
  runner.next = newNode;
}

sll.prototype.reverse = () => {
  let runner = this.head;
  let prev = null;

  while(runner.next) {
    let temp = runner.next;
    runner.next = prev;
    prev = runner;
    runner = temp;
  }

  runner.next = prev;
  this.head = runner;
}

let bob = new sll();
bob.add(1);
bob.add(2);
bob.add(3);
bob.add(4);
bob.add(5);
bob.reverse();
bob.reverse();
bob.print();
