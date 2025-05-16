function ConvertArrays(arr: string[]): [string, number] {

    let text: string = arr.join("")
    let length: number = text.length;

    return [text, length]
}

console.log(ConvertArrays(['How', 'are', 'you?']))