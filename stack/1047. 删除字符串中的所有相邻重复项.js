/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = []
    let sArr = Array.from(s)
    sArr.forEach((item) => {
        if (item === stack[stack.length - 1]) {
            stack.pop()
        } else {
            stack.push(item)
        }
    })
    return stack.join('')
};