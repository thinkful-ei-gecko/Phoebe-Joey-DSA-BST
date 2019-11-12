const BinarySearchTree = require('./BST');

function printPretty(BST) {
  if (BST.value === null) {
    return;
  } else {
    return {
      node: BST.value,
      left: BST.left ? printPretty(BST.left) : null,
      right: BST.right ? printPretty(BST.right) : null
    };
  }
}

// 1. Draw a BST
// 3,1,4,6,9,2,5,7
// https://share.getcloudapp.com/DOuG1BL9
// E A S Y Q U E S T I O N
// https://share.getcloudapp.com/qGuznJnD

// 2. Remove the root
// 3,1,4,6,9,2,5,7
// https://share.getcloudapp.com/E0uPOjQP
// E A S Y Q U E S T I O N
// https://share.getcloudapp.com/d5ubjRoO

// 3. Create a BST class
// See BST.js.
// Results for both match what our BST is returning

const BST = new BinarySearchTree(3, 3);

BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
BST.insert(7, 7);

// console.log(JSON.stringify(BST))
// console.log(BST.right.right)

// const BST = new BinarySearchTree('E', 3)

// BST.insert('A', 1)
// BST.insert('S', 4)
// BST.insert('Y', 6)
// BST.insert('Q', 9)
// BST.insert('U', 2)
// BST.insert('E', 5)
// BST.insert('S', 7)
// BST.insert('T', 7)
// BST.insert('I', 7)
// BST.insert('O', 7)
// BST.insert('N', 7)

// console.log(BST)
// console.log(BST.right.left)

// 4. What does this program do?
// If we ran the tree(BST) for input [3,1,4,6,9,2,5,7], we'd get 37

// 5. Height of a BST
function height(bst){
  
  if(!bst){
    return 0;
  }
  let leftHeight = 1 + height(bst.left);
  let rightHeight = 1 + height(bst.right);

  if(leftHeight > rightHeight){
    return leftHeight;
  }else{ 
    return rightHeight;
  }
  // (leftHeight > rightHeight) ? leftHeight : rightHeight;
  // return Math.max(leftHeight, rightHeight);
}

// console.log(JSON.stringify(printPretty(BST)));
// console.log(height(BST));
function isItBST(bst) {
  
  if (!bst) {
    return true;
  }
  else {
    if(bst.left) {
      if (bst.left.key > bst.key) {
        return false;
      } else {
        isItBST(bst.left);
      }
    }
    // Alt code:
    // (bst.left && bst.left > bst.key) ? false : isItBST(this.bst);

    if(bst.right) {
      if (bst.right.key < bst.key) {
        return false;
      } else {
        isItBST(bst.right);
      }
    }
    // Alt code:
    // (bst.left && bst.left > bst.key) ? false : isItBST(this.bst);
    return true;
  }
}
const nonBST = { 
  key: 3, value: 0, 
  left: { key: 4, value: 0, left: null, right: null }, 
  right:{ key: 2, value: 0, left: null, right: null }, 
};
// console.log(isItBST(BST));

function printKeys(BST) {
  let arr = [];
  while(BST.key !== null){
    arr.push(BST.key);
    
  }
  return arr;
}
// console.log(printKeys(BST));


function getNthLargest (bst, state) {
  //Walk down to the furthest right node.
  if (bst.right) {
    getNthLargest(bst.right, state)
    if (state.result) {
      return;
    }
  }
  //decrement every time we check a node
  state.nth--;
  //if value goes to zero we've hit our limit
  if (!state.nth) {
    state.result = bst.key;
    return;
  }
  //start walking with the left 
  if (bst.left) {
    getNthLargest(bst.left, state)
  }
}

function findThirdLargest (bst) {
  if (bst.key === null) {
    return null;
  }
  const state = {
    nth: 3,
    result: null
  }
  getNthLargest(bst, state);
  return state.result;
}

// console.log(findThirdLargest(BST))

// 8. Balanced BST

const balancedBST = { 
  key: 3, value: 0, 
  left: { key: 2, value: 0, left: null, right: null }, 
  right:{ key: 4, value: 0, left: null, right: null }, 
};

function isBalanced(bst){
  if(!bst){
    return 0;
  }
  let leftHeight = 1 + height(bst.left);
  let rightHeight = 1 + height(bst.right);
  let heightDifference = leftHeight - rightHeight;
  
  if (Math.abs(heightDifference) > 1) {
    return false;
  } else {
    return true;
  }
}

// console.log(isBalanced(balancedBST)) // true
// console.log(isBalanced(BST)) // false

// 9. Are they the same BSTs?
const input1 = [3, 5, 4, 6, 1, 0, 2];
const input2 = [3, 1, 5, 2, 4, 6, 0];
const input3 = [3, 1, 5, 2, 4, 6, 9];

function sameBSTs(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let sortedArr1 = arr1.sort();
  let sortedArr2 = arr2.sort();
  for(let i=0; i<arr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(sameBSTs(input1, input2)); // true
console.log(sameBSTs(input1, input3)); // false