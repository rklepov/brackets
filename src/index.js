// index.js

function check(str, bracketsConfig) {
    const open = bracketsConfig.map((x) => x[0]);
    const close = bracketsConfig.map((x) => x[1]);
    const stack = [];

    for (let b of [...str]) {
        const ixo = open.indexOf(b);
        const ixc = close.indexOf(b);

        if (ixo === ixc) {
            // same brace
            if (stack.length > 0 && stack[0] === b) {
                stack.shift();
            } else {
                stack.unshift(b);
            }
        } else if (ixo !== -1) {
            // open brace
            stack.unshift(close[ixo]);
        } else if (ixc !== -1) {
            // close brace
            if (stack.length > 0 && stack[0] === b) {
                stack.shift();
            } else return false;
        }
    }

    return stack.length === 0;
}

module.exports = check;

//__EOF__
