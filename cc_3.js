let customers={
    Names:['Tim','Dim','Zim'],
    CustomerEmail:['t@mail','dim@mail','zm@mail'],
    Purchase:['Rock','table','pen']
};
console.log(customers);

let extra= customers.Names.push("Kim");
let mailing= customers.CustomerEmail.push("Kimm@mail");
let but= customers.Purchase.push("bee");
console.log(customers);

let removeOne= customers.Names.shift();
console.log(customers)
