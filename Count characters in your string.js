/* The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { } */

function count(string) {

  if (string === '') {
    return {};
  }
  
  let result = {};
  let arr = [...string];

  for (let e of arr) {
    if (result[e]) {
      result[e]++
    } else {
      result[e] = 1;
    }
  }
  return result;
}