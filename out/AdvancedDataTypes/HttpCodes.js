"use strict";
function httpCodes(httpRequest) {
    return httpRequest.text;
}
console.log(httpCodes({ code: 404, text: 'Not Found', printChars: 212421 }));
//# sourceMappingURL=HttpCodes.js.map