function getNthLargest (bst, state) {
  //Walking down to the furthest right node.
  if (bst.right) {

    //bst.value = 4 
    //below is true, bst.right.value = 6
    getNthLargest (bst.right, state) {
      //Walking down to the furthest right node.
      
      //bst.value = 6
      //below is true, bst.right.value = 7
      if (bst.right) {
        getNthLargest (bst.right, state) {
          //Walking down to the furthest right node.

          //bst.value = 7
          //below is true, bst.right.value = 9  
          if (bst.right) {
            getNthLargest (bst.right, state) {
              //Walking down to the furthest right node.

              //bst.value = 9
              //below is false!
              if (bst.right) {
                getNthLargest (bst.right, state) {
                  //No more nodes to walk down on the right, so skip this next conditional (commented out for visual)
                  // if (bst.right) {        
                  //   getNthLargest(bst.right, state)
                  //   if (state.result) {
                  //     return;
                  //   }
                  // }
                  
                  state.nth--; //state.nth == 2
                  
                  // we don't meet the requirements for the next code, so skip (commented out for visual)
                  // if (!state.nth) {
                  //   state.result = bst.key;
                  //   return;
                  // }

                  // no left nodes for nine, so exit
                  // if (bst.left) {
                  //   getNthLargest(bst.left, state)
                  // }
                }


                //Just exited area where bst.value was 9. value now is 7
                // state.result is still null, so skip the following code
                // if (state.result) {
                //   return;
                // }
              }

              state.nth--; //state.nth == 1
              
              //following code still isn't valid, so skip
              // if (!state.nth) {
              //   state.result = bst.key;
              //   return;
              // }

              //7 doesn't have a left so skip this code
              // if (bst.left) {
              //   getNthLargest(bst.left, state)
              // }
            }

            //Just exited area where bst.value was 7. value now is 6
            // state.result is still null so ignore this
            // if (state.result) {
            //   return;
            // }
          }
          
          //decrement every time we check a node
          state.nth--; //state.nth == 0
          
          // finally enter this code
          if (!state.nth) {
            state.result = bst.key; // 6
            return; //exit this function (commented out remainder)
          }
          
          // if (bst.left) {
          //   getNthLargest(bst.left, state)
          // }
        }

        //state.result has value 6, return
        if (state.result) {
          return; //exit this function, i commented out the code
        }
      }
      
      // state.nth--;
      
      // if (!state.nth) {
      //   state.result = bst.key;
      //   return;
      // }
      
      // if (bst.left) {
      //   getNthLargest(bst.left, state)
      // }
    }

      //state.result has value 6, return
    if (state.result) {
      return; //exit this function, i commented out the code
    }
  }
  
  // state.nth--;
  
  // if (!state.nth) {
  //   state.result = bst.key;
  //   return;
  // }
  
  // if (bst.left) {
  //   getNthLargest(bst.left, state)
  // }
}

// at the end, returns six

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
