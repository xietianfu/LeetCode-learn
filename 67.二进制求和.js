/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (47.47%)
 * Total Accepted:    22.4K
 * Total Submissions: 47.1K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let arrA = a.split('');
  let arrB = b.split('');
  let max = arrA.length > arrB.length ? arrA : arrB;
  let min = arrA != max ? arrA : arrB;
  console.log(max, min);
  // 处理低位相加
  let shuldAdd = 0;
  for (let i = min.length - 1; i >= 0; i--) {
    let sum =
      parseInt(max[i + max.length - min.length]) + parseInt(min[i]) + shuldAdd;
    console.log(
      'sum',
      sum,
      i,
      parseInt(max[i + max.length - min.length]),
      min[i],
    );
    // 重置进位
    shuldAdd = 0;
    // 处理进位;
    if (sum > 1) {
      shuldAdd = 1;
      sum = sum - 2;
    }
    max[i + max.length - min.length] = sum;
  }

  // 最高位是否进位，并处理
  if (shuldAdd && max.length != min.length) {
    if (max.length != min.length) {
      for (let i = max.length - min.length - 1; i >= 0; i--) {
        let sum = parseInt(max[i]) + shuldAdd;
        shuldAdd = 0;
        if (sum > 1) {
          shuldAdd = 1;
          sum = sum - 2;
          max[i] = sum;
        } else {
          max[i] = sum;
          break;
        }
      }
    } else {
      max.unshift('1');
      shuldAdd = 0;
    }
  }
  if (shuldAdd) {
    max.unshift('1');
    shuldAdd = 0;
  }
  return max.join('');
};

console.log(addBinary('0', '0'));

// note: 多分析状态
