/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (37.41%)
 * Total Accepted:    65.7K
 * Total Submissions: 175.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  this.s = s;
  const symbolList = {
    '[': ']',
    '{': '}',
    '(': ')',
  };
  if (s.length % 2 === 1) {
    return false;
  }
  if (s === '') {
    return true;
  }
  const reg = /(\(\))|(\{\})|(\[\])/g;
  let len = this.s.length;
  while (len > 0) {
    this.s = this.s.replace(reg, '');
    if (this.s.length === len) {
      return false;
    }
    len = this.s.length;
  }
  return true;
};

console.log(isValid('[()](())'));
// note: 1. 字符串为空或者长度为1时，为false
// note: 2. 字符串长度为奇数时，为false
// note: 3. 通过替换前和替换后长度比较，如果不为0，同时长度没有变化则为false
