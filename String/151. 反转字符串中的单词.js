/**
 * 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 * 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
 * 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。
 * 返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
 * 
 */

var removeExtraSpace = function(s) {
    let slow = 0;
    for (let fast = 0; fast < s.length; fast++) {
        if (s[fast] !== ' ') {
            if (slow !== 0) s[slow++] = ' '
            while (fast < s.length && s[fast] !== ' ') {
                s[slow++] = s[fast++]
            }
        }
    }
    s.length = slow
}

function reverse(strArr, start, end) {
  let left = start;
  let right = end;
  while(left < right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}

var reverseWords = function(s) {
    const strArr = Array.from(s)
    removeExtraSpace(strArr)
    // 整体翻转
    reverse(strArr, 0, strArr.length - 1);
    let start = 0;
    for(let i = 0; i <= strArr.length; i++) {
        if (strArr[i] === ' ' || i === strArr.length) {
            // 翻转单词
            reverse(strArr, start, i - 1);
            start = i + 1;
        }
    }
    return strArr.join('');
};