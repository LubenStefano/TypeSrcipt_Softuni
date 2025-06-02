class Counter{
    private static _count:number = 0;

    static increment():void{
        this._count ++;
    }

    static getCount():number{
        return this._count
    }
}

Counter.increment();

Counter.increment();

console.log(Counter.getCount());

// Counter.count = 10;