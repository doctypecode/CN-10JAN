const merge = function (leftArray, rightArray) {
  const finalArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex])
      finalArray.push(leftArray[leftIndex++]);
    else finalArray.push(rightArray[rightIndex++]);
  }

  while (leftIndex < leftArray.length) finalArray.push(leftArray[leftIndex++]);
  while (rightIndex < rightArray.length)
    finalArray.push(rightArray[rightIndex++]);

  return finalArray;
};

const sortArray = function (nums) {
  if (!nums.length) return nums;

  const mid = Math.floor(nums.length / 2);
  let leftArray = nums.slice(0, mid);
  let rightArray = nums.slice(mid);

  if (leftArray.length > 1) leftArray = sortArray(leftArray);
  if (rightArray.length > 1) rightArray = sortArray(rightArray);

  return merge(leftArray, rightArray);
};

console.log(sortArray([2, 5, 2, 5, 3, 2, 45, 7, 4]));
