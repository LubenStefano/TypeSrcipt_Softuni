type ConditionalParam<T> = T extends number ? number : string;

function conditionalNumber<T>(param: ConditionalParam<T>): void {
    if (typeof param === "number") {
        console.log(param.toFixed(2));
    } else {
        console.log(param);
    }
}

conditionalNumber<number>(20.3555);

conditionalNumber<string>('wow');

conditionalNumber<boolean>('a string');