// Removing Elements
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
  
  
    let newarr=[] //creates a new array
    
    
       for(let i=0;i<arr.length;i+=2){  //for loop to get all odd numbered indexes
            newarr.push(arr[i])  // push the new item found in the odd numbered index into new array
      
       } return newarr  // return new array
    }
    removeEveryOther([1,2,3,4,5,6],[1,3,5]) //[ 1, 3, 5 ]


