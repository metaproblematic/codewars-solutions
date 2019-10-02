/* Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */ 


function findOdd(A) {
  
  let breadcrumbs = {};
  
  for (let num of A) {
    if (breadcrumbs[num]) {
      breadcrumbs[num]++
    } else {
    breadcrumbs[num] = 1;
    }
  }
  for (let key in breadcrumbs) {
    if (breadcrumbs[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}