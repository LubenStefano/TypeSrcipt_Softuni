"use strict";
function optionalMultiplier(a, b, c) {
    let sum = 1;
    if (a) {
        sum *= Number(a);
    }
    if (b) {
        sum *= Number(b);
    }
    if (c) {
        sum *= Number(c);
    }
    console.log(sum);
    return 1;
}
optionalMultiplier(2, 3);
//# sourceMappingURL=OptionalMultiplier.js.map