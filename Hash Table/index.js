// class HashTable{
//     constructor(size){
//         this.buckets = new Array(size)
//         this.numBuckets = this.buckets.length;
//     }

//     hash(key){
//         let total = 0;
//         for(let i = 0;i< key.length;i++){
//             total += key.charCodeAt(i)
//         }

//         return total % this.numBuckets;
//     }

//     insert(key,value){
//         const index = this.hash(key);
//         if(!this.buckets[index]) this.buckets[index]= [];

//         this.buckets[index].push([key,value])
//     }

//     get(key){
//         const index = this.hash(key);
//         if(!this.buckets[index]) return null;
//         for(let i = 0; i< this.buckets[index].length;i++){
//             if(this.buckets[index][i][0] === key){
//                 return this.buckets[index][i][1]
//             }
//         }
//     }

// }


const objeto1 = {
    clave1: 'valor1',
    clave2: 100,
    clave3: true
  }


// const hashTable = new HashTable()

// hashTable.insert('primer test',objeto1)

//   console.log(hashTable.get('primer test'))



// const ul = document.getElementById('display');


// function SplitPhrase(phrase){
//   let splited = phrase.split(' ');
//   for(let i = 0;i < splited.length ; i++){
//     hashTable.add(i,splited[i],[i+1])
//   }
// }


// class HashTable{
//     constructor(){
//         this.bins = [];
//     }

//     add(index, value, position) {
//         const existingBin = this.bins.find(bin => bin.value === value);
//         if (existingBin) {
//         existingBin.position.push(position[0])
//         } else {
//           if (!this.bins[index]) {
//             this.bins.push({ index, value, position });
//           }
//         }
//       }


//     show(){
//       for(let i = 0;i<this.bins.length;i++){
//         ul.innerHTML+=`<li>${this.bins[i].value}: ${this.bins[i].position}</li>`
//       }
//     }
    
// }

// const hashTable = new HashTable()
// SplitPhrase('I want what I want and I know what I want')
// SplitPhrase('to be ot not to be')



// hashTable.show()

class HashTable{
  constructor(size){
    this.buckets = []
    this.numBuckets = this.buckets.length
  }


  hash(key){
    let hash = 0;
    for(let i = 0;i<key.length;i++){
      hash+= key.charCodeAt(i)

    }
    return hash % this.numBuckets
  }


  insert(key,value){
    let index = this.hash(key);
    if(!this.buckets[index]) this.buckets[index] = [];

    this.buckets[index].push([key,value])
  }

  get(key){
    let index = this.hash(key)
    if(!this.buckets[index]) return null
    for(let i = 0;i<this.buckets[index].length;i++){
      if(this.buckets[index][i][0] === key){
        return this.buckets[index][i][1]
      }
    }

  }

}

// const hashTable = new HashTable()

// hashTable.insert('primer test',objeto1)

// console.log(hashTable.get('primer test'))
