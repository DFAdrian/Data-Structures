// class Nodes {
//     constructor(value,next = null){
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

    
//     append(value){
//         const newNode = new Nodes(value)
//         if(!this.head){
//             this.head = newNode
//         }else{
//             this.tail.next = newNode
//         }
//         this.tail = newNode 
//     }
//     traverse(cb){
//         let currentNode = this.head;
//         while(currentNode !== null){
//             cb(currentNode);
//             currentNode = currentNode.next
//         }
//     }
    
// }

// const printNode = (node)=> console.log(node.value);

// const list = new LinkedList();

// list.append('hgfys');
// list.append('dfgg');
// list.append(532);

// list.traverse(printNode);

/////////////////////////////////*************/////////////////////////////////////////////
// creas el nodo que seria como el bloque en la blockchain ,con un value y un next q conecte con el siguiente nodo parecido a la blockchain

// creas la linked list sin parametros en el constructor con la cabeza y cola vacias en null

// creas un metodo append en el cual chequees si la cabeza esta vacia para agregarle al value y si no esta vacia agregas el tail.next para linkarlo al siguiente nodo y finalmente agregas la cola

// metodo con callback para recorrer la lista creas variable igual al head q es el primer elemento de la lista y mietras sea diferente d null usas el callback para lo q necesites e incrementas el while igualantp el currentnode con el next
/////////////////////////////////*************/////////////////////////////////////////////

// DOUBLY LINKED LIST ///////////////////////////////////////////

class Node{
    constructor(value,next = null,prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head =newNode;
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
    }

    traverse(cb){
        let currentNode = this.head;
        while(currentNode !== null){
            cb(currentNode);
            this.length ++
            currentNode = currentNode.next
        }
    }

}


const printNode = node => console.log(node.value);
const size = length => console.log(length);

const list = new LinkedList();

list.append(234)
list.append(233)
list.append(266)
list.append(786)
list.append(781)

list.traverse(printNode)
size(list.length)