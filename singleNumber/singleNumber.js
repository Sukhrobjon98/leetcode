function singleNumber(nums) {
  let isCheck = true;
  if (nums.length === 1) {
    return nums[0];
  }
  while (true) {
    let num = nums.shift();
    if (!nums.includes(num)) {
        isCheck=false
        return num;
    }
    nums=nums.filter((count)=>count!=num)
  }
}

let arra = [2, 2, 1];
console.log(singleNumber(arra));

