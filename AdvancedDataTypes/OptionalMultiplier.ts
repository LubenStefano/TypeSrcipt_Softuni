function optionalMultiplier(a?: string | number, b?: string | number, c?: string | number): number {

    let sum: number = 1;

    if(a){
        sum *= Number(a);
    }
    if(b){
        sum *= Number(b);
    }
    if(c){
        sum *= Number(c);
    }

    console.log(sum);
    

    return 1;
}

optionalMultiplier(2, 3)