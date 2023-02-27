// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(item){
//         this.items.push(item)
//     }

//     pop(item){
//         this.items.pop(item)
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }
// }

// const stack = new Stack();

// stack.push(12)
// stack.push(1245)
// stack.push(1)

// console.log(stack.peek())


///////////////// Stack linkedList
// class Node{
//     constructor(content,next = null){
//         this.content = content;
//         this.next = next
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null
//     }

//     push(value){
//       const newNode = new Node(value)
//       newNode.next = this.top
//       this.top = newNode
//     }

//     pop(){
//         if(!this.top) return null;
//         const data = this.top.content
//         this.top = this.top.next;
//         return data
//     }

//     isEmpty(){
//         return !this.top
//     }

//     peek(){
//         return this.top ? this.top.content : null
//     }
// }


// const stack = new Stack();

// stack.push(5)
// stack.push(10)
// stack.push(15)
// stack.push(20)
// stack.push(5)
// console.log(stack.peek())
// stack.push('+')
// stack.pop()
// console.log(stack.peek())
// console.log(stack.isEmpty())

const btn = document.querySelector('button');
const inp = document.querySelector('input');
const text = document.querySelector('.text');
const ul = document.querySelector('ul')


class Node {
  constructor(content,next = null){
    this.content = content;
    this.next = next;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.count = 0;
  }

  push(val){
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode
    if(isNaN(val)){
      calc()
    }
      
  }
  
  traverse(){
    let currentNode = this.top;
    while(currentNode !== null){
      ul.innerHTML += `<li>${currentNode.content}</li>`
      currentNode = currentNode.next
    }
  }


  pop(){
    if(!this.top) return null;
    const content = this.top.content;
    this.top = this.top.next;
    return content;
  }

  isEmpty(){
    return !this.top
  }

  peek(){
    return this.top ? this.top.content : null
  }
  
}

const stack = new Stack()


function calc(){
  let counter = 0;
  while(stack.top && counter < 2){
    const op = stack.pop()
    if(op === '+'){
      const a = stack.pop();
      const b = stack.pop();
      stack.push(a + b)
    }else if(op === '-'){
      const a = stack.pop();
      const b = stack.pop();
      stack.push(a - b)
    }else if(op === '*'){
      const a = stack.pop();
      const b = stack.pop();
      stack.push(a * b)
    }else if(op === '/'){
      const a = stack.pop();
      const b = stack.pop();
      stack.push(a / b)
    }else{
      stack.push(parseInt(op))
    }
    counter ++;
  }
}


// const show = node => ul.textContent+= node.content


let count = 0
btn.addEventListener('click',()=>{
  if(!isNaN(inp.value)){
    stack.push(parseInt(inp.value))
    count ++
  }else if(count >= 2){ 
    stack.push(inp.value)
  }else{
    text.classList.remove('hide')
    setTimeout(() => {
      text.classList.add('hide')
    }, 3000);
  }
  inp.value = '';
  display()
})


function display(){
  ul.textContent = ''
  stack.traverse()
}

// const show = node => console.log(node)
