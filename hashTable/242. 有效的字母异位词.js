/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const wordMap = new Array(26).fill(0);
    for (const i of s) {
        wordMap[i.charCodeAt() - "a".charCodeAt()]++;
    }
    for (const j of t) {
        wordMap[j.charCodeAt() - "a".charCodeAt()]--;
    }
    for (let k = 0; k < wordMap.length; k++) {
        if (wordMap[k] !== 0) return false
    }
    return true
};