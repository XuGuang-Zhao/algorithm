var evalRPN = function(tokens) {
    const stack = []
    const operation = ['+', '-', '*', '/']
    tokens.forEach(token => {
        if (operation.includes(token)) {
            const num2 = stack.pop()
            const num1 = stack.pop()
            if (token === '+') stack.push(num1 + num2)
            if (token === '-') stack.push(num1 - num2)
            if (token === '*') stack.push(num1 * num2)
            if (token === '/') stack.push(Math.trunc(num1 / num2))
        } else {
            stack.push(Number(token))
        }
    })
    return stack.shift()
};