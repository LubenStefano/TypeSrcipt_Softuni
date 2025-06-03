class Product{
    private static productCount:number = 1;
    readonly _id:number = this.productCount;
    name:string;
    price:number;

    constructor(name:string, price:number){
        if(name.length <= 1) throw new Error("Name should be at least 1 character");
        if(price <= 0) throw new Error("Price should be positive");

        this.name = name;
        this.price = price;

        this.getDetails();

        Product.productCount += 1;
    }

    getDetails():void{
        console.log(`ID: ${this._id}, Name: ${this.name}, Price: $${this.price}`);
    }

    get productCount(): number{
        return Product.productCount;
    }
}

class Inventory{
    private products: Product[] = [];
    
    
    addProduct(product: Product): void{
        this.products.push(product);
    }

    listProducts():string{
        return `Total products created: ${this.products.length}` 
    }
}

const inventory = new Inventory();

const product1 = new Product("Laptop", 1200);

const product2 = new Product("Phone", 800);


inventory.addProduct(product1);

inventory.addProduct(product2);

console.log(inventory.listProducts());

// Product.productCount = 10;

// const product = new Product("", 800);

// const product2 = new Product("Phone", 0);

// product.id = 5;