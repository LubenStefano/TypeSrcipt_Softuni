type HttpRequest = {
    code: number;
    text: string;
    printChars?: number
}

function httpCodes(httpRequest: HttpRequest): string{

    return httpRequest.text;
}

console.log(httpCodes({ code: 404, text: 'Not Found', printChars: 212421}));
