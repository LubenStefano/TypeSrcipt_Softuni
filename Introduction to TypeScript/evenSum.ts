function evenSum(a: number, b: number, c: number): boolean{
   return ((a + b + c) % 2) === 0;
}

// let result: boolean = evenSum(1, 2, 3); // true
 let result: boolean = evenSum(2, 2, 3) //false

console.log(result);

