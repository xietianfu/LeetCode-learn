/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (38.35%)
 * Total Accepted:    48K
 * Total Submissions: 125.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let shouldAdd = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === 0) {
      if (digits[i] + 1 === 10) {
        digits[i] = 0;
        digits.unshift(1);
      } else {
        digits[i] = digits[i] + 1;
      }
    } else {
      if (shouldAdd) {
        shouldAdd = false;
        digits[i] = digits[i] + 1;
        if (digits[i] === 10) {
          digits[i] = 0;
          shouldAdd = true;
        } else {
          break;
        }
      }
    }
  }
  return digits;
};

console.log(
  ...plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]),
);

// note: 处理数值大于int最大值的计算
