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

class Node{
    constructor(content,next = null){
        this.content = content;
        this.next = next
    }
}

class Satck {
    constructor(){
        this.top = null
    }

    push(value){
        const newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    pop(){
        if(!this.top) return null

        const data = this.top.content
        this.top = this.top.next;
        return data
    }

    isEmpty(){
        return !this.top
    }

    peek(){
        return this.top ? this.top.content : null
    }
}


// const stack = new Satck();

// console.log(stack.isEmpty());
// stack.push(23)
// stack.push(563)
// stack.push(234);
// console.log(stack.peek())
// stack.pop()
// console.log(stack.peek())
