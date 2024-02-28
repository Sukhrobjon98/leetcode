function sumSubarrayMins(arr) {
  let currArr = [];
  for (const iteam of arr) {
    currArr.push([iteam]);
  }
  
  return currArr;
}

let arr = [3, 1, 2, 4];
console.log(sumSubarrayMins(arr));
