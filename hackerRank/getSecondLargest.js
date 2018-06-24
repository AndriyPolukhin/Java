function getSecondLargest(nums) {
  // Complete the function

  nums.sort((x, y) => y - x);
  for (let i = 0, ii = 1; i < nums.length - 1; i++, ii++) {
    if (nums[i] !== nums[ii]) {
      return nums[1];
    } else if (nums[i] === nums[ii]) {
      nums.shift(nums[i]);
      return nums[1];
    }
  }

}


getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]);