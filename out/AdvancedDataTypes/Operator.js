"use strict";
function operator(param, operation, operand) {
    switch (operation) {
        case 'Index':
            if (typeof param === 'string' || Array.isArray(param)) {
                return param[operand];
            }
            break;
        case 'Length':
            if (typeof param === 'string' || Array.isArray(param)) {
                return param.length % operand;
            }
            break;
        case 'Add':
            if (typeof param === 'string' || typeof param === 'number') {
                return Number(param) + operand;
            }
            break;
    }
    return undefined;
}
//# sourceMappingURL=Operator.js.map