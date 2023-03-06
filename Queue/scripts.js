// class Queue {
//     constructor(){
//         this.items = [];
//     }

//     enqueue(item){
//         this.items.push(item)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     peek(){
//         return this.items[0]
//     }
// }

// const queue = new Queue();

// queue.enqueue(2)
// queue.enqueue(5)
// queue.enqueue(8)

// console.log(queue.peek())
// console.log(queue.dequeue())
// console.log(queue.peek())


const btn = document.querySelector('button');
const inp = document.getElementById('inp');
const ul = document.querySelector('ul');

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    enqueue(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
      this.length++;
    }
  
    dequeue() {
      if (!this.head) {
        return null;
      }
  
      const removedNode = this.head;
  
      if (this.head === this.tail) {
        this.tail = null;
      }
  
      this.head = this.head.next;
      this.length--;
  
      return removedNode.value;
    }
  }

  let iteration = 0;
  function sieveOfEratosthene(n) {
    const q1 = new Queue();
    const q2 = new Queue();
    
    for (let i = 2; i <= n; i++) {
      q1.enqueue(i);
    }
    
    ul.innerHTML +=`<li>Iteration ${iteration}: Q1 = ${q1.length > 0 ? q1.toArray().join(' ') : ''}, Q2 = ${q2.toArray().join(' ')}</li>`;
    while (q1.length > 0) {
      const x = q1.dequeue();
      q2.enqueue(x);
      
      let current = q1.head;
      let prev = null;
      
      while (current) {
        const value = current.value;
        
        if (value % x === 0) {
          if (prev) {
            prev.next = current.next;
          } else {
            q1.head = current.next;
          }
  
          q1.length--;
        } else {
          prev = current;
        }
        
        current = current.next;
      }
      
      iteration++ 
      ul.innerHTML +=`<li>Iteration ${iteration}: Q1 = ${q1.length > 0 ? q1.toArray().join(' ') : ''}, Q2 = ${q2.toArray().join(' ')}</li>`;
    }
    
    return q2.toArray();
  }
  
  
  Queue.prototype.toArray = function() {
    const result = [];
    let current = this.head;
    
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    
    return result;
  }
  
  btn.addEventListener('click',()=>{
    if(inp.value !== ''){
        sieveOfEratosthene(inp.value)
    }
    btn.setAttribute('disabled',true)
  })
  
