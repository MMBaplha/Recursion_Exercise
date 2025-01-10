/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) return 1; 
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) return 0; 
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */
function everyOther(str, idx = 0) {
  if (idx >= str.length) return ""; 
  return str[idx] + everyOther(str, idx + 2); 
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if (str.length <= 1) return true; 
  if (str[0] !== str[str.length - 1]) return false; 
  return isPalindrome(str.slice(1, -1)); 
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1; 
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1); 
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str === "") return ""; 
  return str[str.length - 1] + revString(str.slice(0, -1)); 
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]); 
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      result = result.concat(gatherStrings(obj[key])); 
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1; 
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === val) return mid; 
  if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1); 
  return binarySearch(arr, val, mid + 1, right); 
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
