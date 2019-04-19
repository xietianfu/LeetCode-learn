/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.84%)
 * Total Accepted:    71.5K
 * Total Submissions: 217.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let result = '';
  let index = 0;
  let isquel = true;
  // 为空判断
  if (strs.length === 0) {
    return result;
  }
  if (!strs[0]) {
    return result;
  }
  // 只有一个值处理
  if (strs.length === 1) {
    return (result = strs[0]);
  }
  while (isquel) {
    let cell = '';

    strs.forEach(val => {
      // 当cell已经赋值后，进行判断
      if (val[index]) {
        if (cell) {
          isquel = val[index] && cell === val[index] && isquel ? true : false;
        } else {
          cell = val[index];
        }
      } else {
        isquel = false;
      }
    });
    if (isquel) {
      result += cell;
      index += 1;
    } else {
      break;
    }
  }
  return result;
};

// note: 1. 对传入数组的一些特殊情况进行过滤
// note: 2. 当isquel为false时，就要停止整个函数运行，由于forEach不能停止，后续就都为false
